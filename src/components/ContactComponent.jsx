function Contacts() {
    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold mb-4'>Contatti</h2>
            <div className='bg-gray-200 p-6 rounded-lg shadow-md'>
                <p className='text-gray-700'>
                    Per contattarmi, puoi inviare una e-mail a:{" "}
                    <a href='mailto:tuo@email.com' className='text-blue-500'>
                        tuo@email.com
                    </a>
                    .
                </p>
                <p className='text-gray-700 mt-2'>
                    Puoi anche trovarmi su{" "}
                    <a
                        href='https://github.com/tuo-username'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500'
                    >
                        GitHub
                    </a>{" "}
                    e{" "}
                    <a
                        href='https://linkedin.com/in/tuo-nome'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500'
                    >
                        LinkedIn
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export default Contacts;
