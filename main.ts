document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('resume-form') as HTMLFormElement
    const resumeContainer = document.getElementById('resume') as HTMLDivElement
    const editButton = document.getElementById('edit-resume') as HTMLButtonElement
    const themeToggle = document.getElementById('toggle-theme') as HTMLButtonElement


    themeToggle.addEventListener('click',()=>{
        document.body.classList.toggle('dark-mode')
        document.body.classList.toggle('light-mode')
        themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? 'Switch to light mode'
        : 'Switch to dark mode'
    })
    
    form.addEventListener('submit',(event)=>{
        event.preventDefault()
     
        const name = (document.getElementById('name') as HTMLInputElement ).value
        const email = (document.getElementById('email') as HTMLInputElement ).value
        const education =(document.getElementById('education') as HTMLInputElement).value
        const work = (document.getElementById('work-experience') as HTMLInputElement).value
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',')
     
        resumeContainer.innerHTML = ''

      const resumeHtml = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <h3>Eductaion</h3>
      <p>${education}</p>
      <h3>Work Experience</h3>
      <p>${work}</p>
      <h3>Skills</h3>
          <ul>
            ${skills.map(skil=>`<li>${skil.trim()}</li>`).join('')}         
          </ul>
      `


        form.style.display='none'
        editButton.style.display='block'


       
    
        resumeContainer.innerHTML = resumeHtml

})
editButton.addEventListener('click',()=>{
    form.style.display='block'
    editButton.style.display='none'
   })
})