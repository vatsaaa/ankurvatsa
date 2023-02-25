import React, { Component } from "react";
import Navbar from '../navbar/Navbar';
import Profile from './profile/Profile';
import Educations from "./educations/Educations";
import Experiences from "./experiences/Experiences";
import Skills from "./skills/Skills";

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col s12 m3">
                            <Profile />
                        </div>
                        <div className="col s12 m9">
                            <Skills />
                            <Experiences />
                            <Educations />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
