// import Null from "axios/unsafe/helpers/null";

function EventListener()
{
  const ProjectList = document.querySelectorAll('.Projects');
  const FunFactP = document.querySelector("#AboutP");
  const FunFactB=document.querySelector("#AboutHB");
  const RedHover=document.querySelectorAll(".RedHover");


  // const Navform1=document.querySelector(".IncreaseFontS");
  // const Navform2=document.querySelector(".IncreaseFontS2");
  const Images=document.querySelectorAll("img");




  //Below is LazyLoad Details Addition
  Images.forEach((Image)=> {
    if(!Image.classList.contains("lazyload"))
    {
      Image.classList.add("lazyload")
    }
    if(!Image.src){
      Image.src="../public/Logo/Transparent.png"

    }
    Image.loading="lazy"
  })


  // Below is Nav and Home button colour changes
  RedHover.forEach((RedElements)=>{
    RedElements.addEventListener("focus",()=>{
      RedElements.style.backgroundColor="red"
      RedElements.style.backgroundSize="500%"
    })
    RedElements.addEventListener("focusout",()=>{
      RedElements.style.backgroundColor="black"
      RedElements.style.backgroundSize="cover"
    })
    RedElements.addEventListener("mouseover",()=>{
      RedElements.style.backgroundColor="red"
      RedElements.style.backgroundSize="500%"
    })
    RedElements.addEventListener("mouseleave",()=>{
      RedElements.style.backgroundColor="black"
      RedElements.style.backgroundSize="cover"
    })
  });

  //Below is Colour changing of Home Projects
  ProjectList.forEach((Projects)=>{
    Projects.addEventListener("mouseover",()=>{

      Projects.parentElement.lastElementChild.style.display="block";
      Projects.parentElement.firstElementChild.style.filter ="brightness(50%)";
      Projects.parentElement.firstElementChild.style.transition="all 1s";
    })
    Projects.addEventListener("mouseleave",()=>{
      Projects.parentElement.lastElementChild.style.display="none";
      Projects.parentElement.firstElementChild.style.filter="brightness(100%)";
      Projects.parentElement.firstElementChild.style.transition="all 1s";
    })

    Projects.addEventListener("focus",()=>{

      Projects.parentElement.lastElementChild.style.display="block";
      Projects.parentElement.firstElementChild.style.filter ="brightness(50%)";
    })
    Projects.addEventListener("focusout",()=>{
      Projects.parentElement.lastElementChild.style.display="none";
      Projects.parentElement.firstElementChild.style.filter="brightness(100%)";
    })

    Projects.parentElement.lastElementChild.addEventListener("mouseover",()=>{

      Projects.parentElement.lastElementChild.style.display="block";
      Projects.classList.replace("Projects","ProjectTemp");
      Projects.parentElement.firstElementChild.style.filter="brightness(50%)";
      Projects.parentElement.firstElementChild.style.transition="all 1s";
    })
    Projects.parentElement.lastElementChild.addEventListener("mouseleave",()=>{

      Projects.parentElement.lastElementChild.style.display="block";
      Projects.classList.replace("ProjectTemp","Projects");
      Projects.parentElement.firstElementChild.style.filter="brightness(100%)";
      Projects.parentElement.firstElementChild.style.transition="all 1s";
    })

    Projects.parentElement.lastElementChild.addEventListener("keydown",()=>{

      Projects.parentElement.lastElementChild.style.display="block";
      Projects.classList.replace("Projects","ProjectTemp");

    })
    Projects.parentElement.lastElementChild.addEventListener("keydown",()=>{

      Projects.parentElement.lastElementChild.style.display="block";
      Projects.classList.replace("ProjectTemp","Projects");

    })
  });

  //Below is functioning FunFact Button in AboutMe
  FunFactB.addEventListener("mousedown",()=>{
    if(FunFactP.style.display==="none")
    {
      FunFactP.style.display="block"
    }
    else
    {
      FunFactP.style.display="none"
    }
  });
  FunFactB.addEventListener("keydown",()=>{
    if(FunFactP.style.display==="none")
    {
      FunFactP.style.display="block"
    }
    else
    {
      FunFactP.style.display="none"
    }
  });




}
const test=document.querySelector("#MissileExplanation1");

EventListener();
