import myPhoto from "../assets/me.jpg";

function AboutMe() {
    return (
        <>
            <h2 className='text-3xl font-bold mb-4'>Chi sono</h2>
            <div className='flex flex-col md:flex-row items-center '>
                <img
                    src={myPhoto}
                    alt=''
                    className='rounded-full h-72 mr-10 my-10'
                />
                <p className="text-lg">
                    Mi chiamo Marco Campisi, ho 21 anni e sono uno sviluppatore web. Amo scoprire
                    nuove tecnologie e creare soluzioni innovative e immediate.
                    La mia passione è trasformare idee in realtà digitali e
                    offrire esperienze coinvolgenti online.
                </p>
            </div>
        </>
    );
}

export default AboutMe;
