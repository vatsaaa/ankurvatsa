import React from 'react';

export default function Skills() {
  return (
    <div>
        <div className="card">
            <div className="card-content">
                <h6>
                    <strong>SKILLS</strong>
                </h6>
                <div className="row mt-top">
                    <div className="col s6">
                        <h6><strong>Server & Presentation</strong></h6>
                        <p>Python, C++, Java/JEE, JavaScript, Node.js, React.js</p>
                    </div>
                    <div className="col s6">
                        <h6><strong>Middleware Engineering</strong></h6>
                        <p>DataSynapse Grid, Camel, Mule, Data Power XI52, Kafka</p>
                    </div>
                </div>
                <div className="row mt-top">
                    <div className="col s6">
                        <h6><strong>Databases & Big Data Stack</strong></h6>
                        <p align="justify">Sybase ASE, ELK Stack, MongoDB, Redis, RabbitMQ, Hadoop Stacks (HDFS, Yarn, Hive, Spark, etc.), Snowflake</p>
                    </div>
                    <div className="col s6">
                        <h6><strong>Distributed Systems & Emerging Technologies</strong></h6>
                        <p align="justify">AWS Cloud, RESTful & Micro-services, Solidity, Blockchains, Web3 (Hardhat, Truffle, OpenZeppelin), Metaverse</p>
                    </div>
                </div>
                <div className="row mt-top">
                    <div className="col s6">
                        <h6><strong>Platform Engineering</strong></h6>
                        <p>Jenkins, SonarQube, Ansible, Docker, Kubernetes</p>
                    </div>
                    <div className="col s6">
                        <h6><strong>Leadership & Management</strong></h6>
                        <p>Program & project management, Lean / Agile / KANBAN</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
