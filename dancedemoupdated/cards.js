document.addEventListener("DOMContentLoaded", () => {
 

  const buttons = document.querySelectorAll('button');
   buttons.forEach(button => {

    onclick = (event) => {};
    ;

      button.onfocus = function() {
        

        button.classList.add("clicked")
        
      
          let child = button.closest('.content').querySelector('.inner');
            child.style.transition = "transform 2s ease, opacity 5s ease";//change here for seconds of fade
            child.style.transform = "translateY(0px)";//how far down it moves
            child.style.visibility="visible";
            child.style.display = "flex";
            child.style.opacity=1;
            
            
         
            
          
          };
          let closebut = button.closest('.content').querySelector('.btn-close').addEventListener("click", (event) => {

            let child = button.closest('.content').querySelector('.inner');
          child.style.transition = "none";
          child.style.transform = "none";
          child.style.top = '450px';
          child.style.left = '20px';
          child.style.visibility = "hidden";
          child.style.opacity = "0"
          //child.style.display = "none";
          button.closest('.content').style="height: 300px"

          });

          function showModule(moduleName) {
            var module = document.querySelector('.' + moduleName + '.module');
            module.style.display = 'block';
    
            if (moduleName === 'Quiz') {
                var quizContainer = document.getElementById('quizContainer');
                quizContainer.classList.add('show');
            }
        }
    
       
      
          function playVideo(videoId) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&fs=1');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            document.querySelector('.inner-dis').innerHTML = '';
            document.querySelector('.inner-dis').appendChild(iframe);
        }

      
   });

  });
