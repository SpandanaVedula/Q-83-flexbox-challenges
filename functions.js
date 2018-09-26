 $(document).ready(function(){

              var setImage = [];
              var setText = [];
    
             $.getJSON('https://9ss7bxey8k.execute-api.ap-southeast-2.amazonaws.com/default/dummy_service', function(json) {


              for (var i = 0; i < json.Data.length; i++) 
              {
               setImage.push(json.Data[i].node.frontmatter.cover);
               setText.push(json.Data[i].node.excerpt);
            }

              for (var i = 0; i < setImage.length; i++)
               {
                $("li").children("img").eq(i).attr("src", setImage[i]);
                $("li").children("img").eq(i).attr("alt", setText[i]);
            }

        });

          $('#tours li').on('click', function() {
          $('#location').val($('img', this).attr('alt'));
      
    })

              $('#tours li').click(function(){
                var src = $(this).find('img').attr('src');
                var text = $(this).find('img').attr('alt');
                console.log(src);
                console.log(text);
                $('div.pop-out div.image div').html(text);
                $('div.pop-out div.image img').attr('src',src);
                $('.pop-out').fadeIn(); 
                
            });
            $('div.pop-out,button.close').click(function(){
                $('.pop-out').fadeOut();
            });
            
            
            $('.cta a').click(function() {
                $('html,body').animate({
                    scrollTop: $('#tours').offset().top
                }, 500);
                return false;
            });
            
            $('#tours li').on('click', function() {
                $('#location').val($('img', this).attr('alt'));
            });
        })