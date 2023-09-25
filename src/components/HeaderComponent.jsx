import React from "react";

class HeaderComponent extends React.Component {
    render() {
        return (
            <header>
                <nav className='border-b-[1px]'>
                    <div className='flex'>
                        <ul className='font-medium flex w-full justify-center my-2'>
                            <li className='m-4 hover:scale-110 transition'>
                                <a href=''>Home</a>
                            </li>
                            <li className='m-4 hover:scale-110 transition'>
                                <a href=''>Chi sono</a>
                            </li>
                            <li className='m-4 hover:scale-110 transition'>
                                <a href=''>Progetti</a>
                            </li>
                            <li className='m-4 hover:scale-110 transition'>
                                <a href=''>Contatti</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;
