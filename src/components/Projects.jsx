/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";

class Projects extends React.Component {
    state = {
        projects: [],
    };

    constructor(props) {
        super(props);

        console.log(props.query);
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/${this.props.username}/repos`)
            .then((response) => {
                this.setState({ projects: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <div className='max-w-7xl mx-auto grid grid-cols-4 gap-4'>
                    {this.state.projects.map((project) => (
                        <div key={project.id} className="m-3">
                            <h2 className='font-bold text-xl'>{project.name}</h2>
                            <p>{project.description}</p>
                            <a href={project.html_url}>Vai al progetto</a>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Projects;
