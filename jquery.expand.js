(function ($) {

    var Expand = function(el, opts) {
        var $element = this.$element = $(el);

        this.opts = opts;
        this.init();
    }

    Expand.prototype = {
        constructor: Expand,
        init: function() {
            this.bind();
        },
        bind: function() {
            var _self = this;

            // get values from data-attributes
            this.getAttributes();

            this.$element.addClass(this.opts.classPrefix);

            // bind focus event
            this.$element.on("focus", function() {
                if (!_self.isOpen()) {
                    _self.expand();
                }
            });

            // bind blur event
            this.$element.on("blur", function() {
                if (!_self.hasContent()) {
                    _self.contract();
                }
            });
        },
        getAttributes: function() {
            this.opts.classPrefix = this.$element.attr("data-expand-class") ? this.$element.attr("data-expand-class") : this.opts.classPrefix;
        },
        expand: function() {
            this.$element.addClass(this.opts.classPrefix + "--active");
        },
        contract: function() {
            this.$element.removeClass(this.opts.classPrefix + "--active");
        },
        isOpen: function() {
            return this.$element.hasClass(this.opts.classPrefix + "--active");
        },
        hasContent: function() {
            return this.$element.val() != "";
        }
    }

    $.fn.expand = function(option, param) {
        var opts;

        if (typeof option === 'object' && option) {
            opts = $.extend(true, {}, $.fn.expand.defaults, option);
        } else {
            opts = $.extend(true, {}, $.fn.expand.defaults);
        }
        return this.each(function() {
            var $this = $(this),
            // don't call again if already initialised on this object
            data = $this.data('expand');
            if(!data){
                $this.data('expand', data = new Expand(this, opts));
            }
            // allow the calling of plugin methods on an instance by name, eg: $item.expand('bind')
            if (typeof option === 'string') {
                data[option](param);
            }
        });
    };

    $.fn.expand.defaults = {
        classPrefix: "expand"
    };


    $(window).load( function() {
        $("[data-expand]").expand()
    });


})(jQuery);
