export default function Contact() {
    return <div className="flex justify-center">
        <div className=" w-[80%] bg-lime-600 rounded-lg">
            <h2 className="text-center mt-6">Envie su correo</h2>
            <form className="flex flex-col items-center justify-center p-6"
                action="mailto:ignacio.antonio420@gmail.com" encType="text/plain">
                <div className="flex flex-col justify-start w-96">
                    <label htmlFor="name">Nombre</label>
                    <input className="outline-none" type="text" name="name" />
                </div>
                <div className="flex flex-col justify-start w-96">
                    <label htmlFor="email">Correo electronico</label>
                    <input className="outline-none" type="email" name="email" />
                </div>
                <div className="flex flex-col justify-start w-96">
                    <label htmlFor="subject">Asunto</label>
                    <input className="outline-none" type="text" name="subject" />
                </div>
                <div className="flex flex-col justify-start w-96">
                    <label htmlFor="comments">Comentarios</label>
                    <textarea className="resize-none outline-none" name="comments" cols="15" rows="5"></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
}