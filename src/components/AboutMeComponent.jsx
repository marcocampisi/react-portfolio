import myPhoto from '../assets/me.jpg';

function AboutMe() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Chi sono</h2>
            <img src={myPhoto} alt="" className="rounded-full h-72 mx-auto my-10" />
            <p>
            Sono uno sviluppatore web siciliano di 21 anni. Amo scoprire nuove tecnologie e creare soluzioni innovative e immediate. La mia passione è trasformare idee in realtà digitali e offrire esperienze coinvolgenti online.
            </p>
        </>
    );
}

export default AboutMe;