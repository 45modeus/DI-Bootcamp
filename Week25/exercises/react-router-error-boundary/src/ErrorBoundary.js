import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError : false };
    }

    componentDidCatch(error, info) {
        console.log("Error caught by boundary:", error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-center mt-5">
                    <h1 style={{color: "red"}}>Something went wrong!</h1>
                    <p>Please go back to another page.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;