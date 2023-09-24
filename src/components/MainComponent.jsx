import React from "react";

class MainComponent extends React.Component {
    render() {
        return (
            <main>
                <div className='mt-10 mx-auto max-w-7xl'>
                    <h1 className='text-5xl font-mono font-extrabold'>
                        Ciao, sono Marco. Sono un Full-stack Web Developer.
                    </h1>
                    <p className='font-medium mt-5'>
                        Esplora il mio portfolio per scoprire più informazioni
                        su di me: cosa realizzo, le tecnologie che uso e la
                        passione che metto nel mio lavoro. Sono italiano.
                    </p>
                </div>
                <div className='flex max-w-7xl border-t-[1px]'></div>
            </main>
        );
    }
}

export default MainComponent;
