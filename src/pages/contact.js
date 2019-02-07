import React from 'react'
import Layout from '../components/layout'
import { navigateTo } from 'gatsby-link'
import '../styles/contact.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const form = evt.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="contactContainer">
          <div className="worktogether">
            <h2>Let's Work Together</h2>
            <p>
              Send me a message if you would like to discuss a project or want
              to find out more about me or my work, get in touch!
            </p>
          </div>
          <div className="formitems">
            <form
              className="form"
              name="HoracioContactForm"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}

              <input
                type="hidden"
                name="form-name"
                value="HoracioContactForm"
              />
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>

              <div className="first_name">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="field-divided"
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="last_name">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="field-divided"
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={this.handleChange}
                />
              </div>

              <div className="phone_number field-divided">
                <label htmlFor="phone">Phone</label>
                <input
                  className="field-divided"
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="email field-divided">
                <label htmlFor="email">Email</label>
                <input
                  className="field-divided"
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="description">
                <label htmlFor="description">Project Description</label>
                <p>
                  <textarea
                    className="field-full"
                    name="description"
                    id="description"
                    rows="6"
                    onChange={this.handleChange}
                  />
                </p>
              </div>

              <div>
                <label htmlFor="service">Type of Service</label>
                <select
                  className="field-divided"
                  name="service"
                  id="myList"
                  onChange={this.handleChange}
                >
                  <option name="service" value="Consulting">
                    Consulting
                  </option>
                  <option name="service" value="UX/UI Design">
                    UX/UI Design
                  </option>
                  <option name="service" value="Software Development">
                    Software Development
                  </option>
                  <option name="service" value="Product Management">
                    Product Management
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="startDate">Project Start Date</label>
                <select
                  className="field-divided"
                  name="startDate"
                  id="startDate"
                  onChange={this.handleChange}
                >
                  <option name="startDate" value="Less than 3 months">
                    Less than 3 months
                  </option>
                  <option name="startDate" value="Between 3 to 6 months">
                    Between 3 to 6 months
                  </option>
                  <option name="startDate" value="Between 6 months to 1 yr">
                    Between 6 months to 1 yr
                  </option>
                  <option name="startDate" value="More than 1yr">
                    More than 1yr
                  </option>
                </select>
              </div>
              <div className="buttonholder">
                <button className="buttonsubmit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    )
  }
}
