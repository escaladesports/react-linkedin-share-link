import React from 'react'

class LinkedinShare extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			link: props.link
		}
	}
	componentDidMount() {
		if (!this.state.link) {
			this.setState({
				link: document.location.href
			})
		}
	}
	componentWillReceiveProps({ link }) {
		if (link) {
			this.setState({ link })
		}
	}
	render() {
		return this.props.children(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.state.link)}&title=${this.props.title}&summary=${this.props.summary}&source=`)
	}
}

LinkedinShare.defaultProps = {
	title: ``,
	summary: ``,
}

export default LinkedinShare
