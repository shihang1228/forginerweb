$(function(){
	/*pc端语言的显示和隐藏*/
    $(".language-cont").on("click",function(e){
        e.preventDefault();
        $(this).find(".language-wrap").toggle();
    })
    $(".language-wrap").on("click",function(e){
        e.stopPropagation();
    })
    /*pc端隐藏语言下拉框*/
    $(document).on("click",function(e){
        //e.preventDefault();
        if(($(e.target).closest(".language-wrap").length == 0) && ($(e.target).closest(".language-cont").length == 0)){
            $(".language-wrap").hide();
        }
    })
    /*移动端语言的显示和隐藏*/
    $(".mobile-language-textcont").on("click",function(){
    	$(".mobile-language-list").slideToggle();
    })
    /*移动端隐藏语言下拉框*/
    $(document).on("click",function(e){
        //e.preventDefault();
        if(($(e.target).closest(".mobile-language-list").length == 0)&&($(e.target).closest(".mobile-language-wrap").length == 0)){
            $(".mobile-language-list").slideUp();
        }
    })
})