import React from 'react';
import Modal from 'react-modal';

import styles from './Card.css'

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgLink: '',
            convertedImgLink: '',
            gravatarLink: '',
            uploaderName: '',
            index: '',
            modalIsOpen: false,
            onRemoveClicked: ''
        }
        this.cardImgRef="cardImg" + this.props.index;
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

        openModal(input) {
          this.setState({modalIsOpen: true});
        }

        afterOpenModal() {
        }

        closeModal() {
          this.setState({modalIsOpen: false});
        }


        _handleImageChange(input) {
              input.preventDefault();

              let reader = new FileReader();
              let file = input.target.files[0];

              reader.onloadend = () => {
                  this.props.dispatch({
                      type: 'LOAD_IMAGE_SUCCESS',
                      convertedImgLink: reader.result,
                      baseImg: reader.result
                });
            };
              reader.readAsDataURL(file)
        }

        _changeImage(input) {
          this.refs[this.cardImgRef].src=(this.refs[this.cardImgRef].src===this.props.convertedImgLink?this.props.imgLink:this.props.convertedImgLink);
        }

        _changeImageModal(input) {
          input.currentTarget.src=(input.currentTarget.src===this.props.convertedImgLink?this.props.imgLink:this.props.convertedImgLink);
        }

        _removeClicked(input){
          if(this.refs[this.cardImgRef]!==undefined){
            this.props.onRemoveClicked(this.refs[this.cardImgRef].src);
          }
        }

  render() {
    return (
      <div className="ui fluid card equal height grid">
        <div className="ui fluid image">
          <img onClick={this.openModal.bind(this)} ref={this.cardImgRef} src={this.props.convertedImgLink}/>
        </div>
        <div className="ui content three columns centered">
          <button className="ui icon left floated button toExchange " onClick={this._changeImage.bind(this)} title="Exchange picture">
            <i className="green exchange icon"></i>
          </button>
          <a className="ui image centered buttons label">
            <img src={this.props.gravatarLink}/>
            {this.props.uploaderName}
          </a><button className="ui icon right floated button toRemove " onClick={this._removeClicked.bind(this)} title="Remove picture">
            <i className="red remove icon"></i>
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="modalStyle"
          overlayClassName="modalOverlayStyle"
          portalClassName=""
          contentLabel="Example Modal">
          <div className="ui container centered">
            <img className="ui fluid rounded image img" src={(this.refs[this.cardImgRef]!==undefined?this.refs[this.cardImgRef].src:'Nothing to see here.')}
            onClick={this._changeImageModal.bind(this)}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Card;
