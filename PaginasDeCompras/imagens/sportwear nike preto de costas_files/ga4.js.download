(function($, history) {

    let itemAdded = [];
    let buyTogether = false;
    let variantBuyTogether = '';
    let response = [];
    var lastVariantId = getUrlVariantId();

    $(window).on("load", function() {
        let productList = [];
        monitorUrlChange();
        
        $('[data-ga4-id]').each(function() {
            if (verifyDuplicity($(this).attr('data-ga4-id'))) {
                return;
            }

            let product = {
                item_id: $(this).attr('data-ga4-id'),
                item_name: htmlDecode($(this).attr('data-ga4-name')),
                price: Number($(this).attr('data-ga4-price')),
                item_brand: htmlDecode($(this).attr('data-ga4-brand')),
                item_category: htmlDecode($(this).attr('data-ga4-category')),
            };
            productList.push(product);
        });

        sendList(productList);

        $('#form_comprar').on('submit', function() {
            var product = $("[data-product-id]").attr('data-product-id');
            var variant = $("#selectedVariant").val();
            var value = $("#preco_atual").val();
            var quantity = $("#quant").val();

            if (quantity == undefined) {
                quantity = 1;
            }

            getProductToGa4(product, variant);

            if (response.length !== 0) {
                sendToCart(response[0]['Product'], quantity, value);
            }
        });

        $(document).delegate('[data-cart-preview-del]', 'click', function() {
            var product = $(this).attr('data-product-id');
            var productsBuyTogether = $(this).parents().find('.cart-preview-item');

            if (productsBuyTogether.length < 2) { 
                var quantity = $(this).parents().find('.cart-preview-quantity-tag').html();
                getProductToGa4(product);
                removeToCart(quantity);
                return;
            }

            buyTogether = true;
            for (i = 0; i < productsBuyTogether.length; i++) {
                getProductToGa4($(productsBuyTogether[i]).attr('data-product-id'));
                removeToCart($(productsBuyTogether[i]).find('.cart-preview-quantity-tag').html());
            }
            buyTogether = false;
        });

        $(document).delegate('[data-tray-tst="purchase_buy_together"]', 'click', function() {
            var formBuyTogether = $(this).parents().eq(5);
            var idBuyTogether = formBuyTogether.attr('id').replace('form_compre_junto_', '');
            var inputs = formBuyTogether.find('input');
            var products = formBuyTogether.find('div[data-tray-product]');
            var dataTrayProductPrice = getrPricesBuyTogether(formBuyTogether.find('div[data-tray-product-price]').attr('data-tray-product-price'));
            
            buyTogether = true;
            sendBuyTogether(products, dataTrayProductPrice);
            sendBuyTogetherWithVariant(inputs, idBuyTogether, dataTrayProductPrice);
            buyTogether = false;
            formBuyTogether.submit();
        });
    });

    function monitorUrlChange() {
        (function(history) {
            var pushState = history.pushState;
            history.pushState = function(state) {
                var result = pushState.apply(history, arguments);
                triggerVariantChange();
                return result;
            };
        })(window.history);
        window.addEventListener('popstate', triggerVariantChange);
    }

    function triggerVariantChange() {
        setTimeout(getVariantChange, 0);
    }

    function getUrlVariantId() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('variant_id');
    }

    function getVariantChange() {
        var currentVariantId = getUrlVariantId();
        var productId = $('#menuVars').data('product-id'); 
        var value = $("#preco_atual").val();

        if (currentVariantId !== lastVariantId) {
            lastVariantId = currentVariantId;
            getProductToGa4(productId, currentVariantId);
        }

        if (response.length !== 0) {
            sendEventItem(response[0]['Product'], value, "select_item");
            sendEventItem(response[0]['Product'], value, "view_item");  
        }
    }
    
    function sendEventItem(item, value, eventType) {  
        const itemId = getAdjustedItemId(item.id);
        let itemObject = {
            item_id: itemId,
            item_name: htmlDecode(item.name),
            item_brand: htmlDecode(item.brand),
            item_variant: item.variant,
            price: Number(item.price),
            discount: Number(item.price - value)
        };
    
        ['item_category', 'item_category2', 'item_category3'].forEach(categoryKey => {
            if (item[categoryKey]) {
                itemObject[categoryKey] = htmlDecode(item[categoryKey]);
            }
        });
    
        sendEvent("event", eventType, {
            currency: 'BRL',
            value: Number(value),
            items: [itemObject]
        });
    }            

    function verifyDuplicity(productId) {
        if (itemAdded.indexOf(productId) === -1) {
            itemAdded.push(productId);
            return false;
        }
        return true;
    }

    function sendList(productList) {
        if (window.location.pathname !== '/' && window.location.pathname !== '/loja/') {
            return;
        }

        if (productList.length === 0) {
            return;
        }

        sendEvent("event", "view_item_list", {
            items: Object.values(productList)
        });
    }

    function getAdjustedItemId(productId) {
        if (buyTogether == true) {
            buyTogether = false;
            return variantBuyTogether ? productId + '-' + variantBuyTogether : productId;
        }

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const variantId = urlParams.get('variant_id');
        return variantId ? `${productId}-${variantId}` : productId;
    }

    function sendToCart(item, quantity, value) {    
        const itemId = getAdjustedItemId(item.id);
        let itemDetails = {
            item_id: itemId,
            item_name: htmlDecode(item.name),
            item_brand: htmlDecode(item.brand),
            item_variant: item.variant,
            price: Number(item.price),
            discount: Number(item.price - value),
            quantity: Number(quantity)
        };
    
        ['item_category', 'item_category2', 'item_category3'].forEach(categoryKey => {
            if (item[categoryKey]) {
                itemDetails[categoryKey] = htmlDecode(item[categoryKey]);
            }
        });

        sendEvent("event", "add_to_cart", {
            currency: 'BRL',
            value: Number(value),
            items: [itemDetails]
        });  
        
    }
        
    function removeToCart(quantity) {
        if (response.length === 0 || response === undefined) {
            return;
        }
        
        let item = response[0]['Product'];

        const itemId = getAdjustedItemId(item.id);
        let itemDetails = {
            item_id: itemId,
            item_name: htmlDecode(item.name),
            item_brand: htmlDecode(item.brand),
            price: Number(item.price),
            discount: Number(item.price - item.value),
            quantity: Number(quantity)
        };
    
        ['item_category', 'item_category2', 'item_category3'].forEach(categoryKey => {
            if (item[categoryKey]) {
                itemDetails[categoryKey] = htmlDecode(item[categoryKey]);
            }
        });
    
        sendEvent("event", "remove_from_cart", {
            currency: 'BRL',
            value: Number(item.value),
            items: [itemDetails]
        });
    }    

    function sendEvent() {
        dataLayerGa4.push(arguments);
    }

    function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    function getProductToGa4(productId, variantId = null) {
        var urlAjax = '/mvc/store/product/getProductToGa4/' + productId + '/' + variantId;
        $.ajax({
            type: 'GET',
            data: {},
            url: urlAjax,
            dataType: 'html',
            async: false,
            success: function(data) {
                if (data) {
                    response = JSON.parse(data);
                }
                
                if (response.length === 0 || response === undefined) {
                    response = []
                    return false;
                }
            }
        });        
    }

    function sendBuyTogether (products, dataTrayProductPrice) {
        for (i = 0; i < products.length; i++) {
            var productId = $(products[i]).attr('data-tray-product');
            getProductToGa4(productId);
            if (response.length !== 0) {
                sendToCart(response[0]['Product'], 1, dataTrayProductPrice[productId]);
            }
        }
    }

    function sendBuyTogetherWithVariant (inputs, idBuyTogether, dataTrayProductPrice) {
        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].type == 'hidden' && inputs[i].value != '' && inputs[i].name != 'variacoes_'+idBuyTogether) {
                var product = $(inputs[i]).attr('data-tray-prod');
                variantBuyTogether = inputs[i].value;
                var quantity = $(inputs[i]).attr('data-tray-qty');
                getProductToGa4(product, variantBuyTogether);
                if (response.length !== 0) {
                    sendToCart(response[0]['Product'], quantity, dataTrayProductPrice[product]);
                }
            }
        }
        variantBuyTogether = '';
    }

    function getrPricesBuyTogether (data) {
        var prices = data.split("|");
        var pricesArray = [];
        var dataPrice = '';

        for (i = 0; i < prices.length; i++) {
            if (prices[i] === ''){
                continue;
            }
            dataPrice = prices[i].split('-');
            pricesArray[dataPrice[0]] = Math.round(dataPrice[1]);
        }

        return pricesArray;
    }

})(jQuery, window.history);
