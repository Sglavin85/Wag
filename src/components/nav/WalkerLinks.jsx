import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './navbar.css'

export default class OwnerLinks extends Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item key="home">
                    <Link className="nav-link" to="/walker-home">Home</Link>
                </Menu.Item>
                <Menu.Item key="myDogs">
                    <Link className="nav-link" to="/walker-profile">My Profile</Link>
                </Menu.Item>
                <Menu.Item key="myRoutes">
                    <Link className="nav-link" to="/walker-calendar">My Calendar</Link>
                </Menu.Item>
                <Menu.Item key="walkers">
                    <Link className="nav-link" to="/walks">Walks</Link>
                </Menu.Item>
                <Menu.Item key="account">
                    <Link className="nav-link" to="/walker-account">Account</Link>
                </Menu.Item>
                <Menu.Item key="logOut">
                    <Link className="nav-link" to="/login">Log Out</Link>
                </Menu.Item>
            </Menu>
        )
    }
}
