'use client'

export default function Contact() {
    const submitHandler= event =>{
        event.preventDefault()

        const { email: {value: email}, subject: {value: subject},
        comments: {value: comments}} = event.target

        const data = {email, subject, comments}

        fetch('api/sendMail',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              }
        })
        .then(res=> {
            if(!res.ok) alert('cannot send email')
            else alert('thanks for your email')
        })
        .catch(error => alert(error.message))
    }

    return <div className="flex justify-center">
        <section className="bg-white md:w-[30%]">
  <div className="px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contactanos</h2>
      <form onSubmit={submitHandler} className="space-y-6">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Tu email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="ejemplo@ejemplo.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Asunto</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Como podemos ayudarte" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="comments" className="block mb-2 text-sm font-medium text-gray-900">Tu Mensaje</label>
              <textarea id="comments" rows="6" className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Deja un comentario..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-white text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
  </div>
</section>
    </div>
}