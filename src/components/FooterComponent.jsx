import React from "react";

class FooterComponent extends React.Component {
    render() {
        return (
            <footer className='mx-4 p-10'>
                <div className='w-full text-center'>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                        © 2023{" "}
                        <span className='hover:underline'>
                            Marco Campisi
                        </span>
                    </span>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;
