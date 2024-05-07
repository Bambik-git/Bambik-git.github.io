import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }

    activateEditMode = () => {
        // setState асинхронная функция
        this.setState({
                editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status);
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode ?
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{this.state.status || "Нет статуса"}</span>
                        </div>
                        :
                        <div>
                            <input onChange={(event) => this.setState({status: event.currentTarget.value})}
                                   autoFocus={true}
                                   onBlur={this.deactivateEditMode}
                                   value={this.state.status}/>
                        </div>
                }
            </>
        )
    }
}

export default ProfileStatus;

