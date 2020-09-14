import React, { Component } from "react";

class ListContacts extends Component {
  render() {
    const my__props = this.props.contacts;

    console.log("Props", my__props);
    return (
      <ol className="contact-list">
        {my__props.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{`${contact.name}`}</p>
              <p>{`${contact.handle}`}</p>
            </div>
            <button className="contact-remove">Remove</button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
