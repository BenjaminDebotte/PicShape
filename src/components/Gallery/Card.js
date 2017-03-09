import React from 'react';
import Modal from 'react-modal';

import styles from './Gallery.css'

  const customStyles = {
    overlay: {

    },
   content: {
     top                   : '1%',
     left                  : '1%',
     right                 : '1%',
     bottom                : '1%',
   }
 };
class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgLink: '',
            convertedImgLink: '',
            gravatarLink: '',
            uploaderName: '',
            index: '',
            modalIsOpen: false
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
          // references are now sync'd and can be accessed.
          this.refs.subtitle.style.color = 'black';
        }

        closeModal() {
          this.setState({modalIsOpen: false});
        }


        _handleImageChange(input) {
              console.log("_handleImageChange");
              input.preventDefault();

              let reader = new FileReader();
              let file = input.target.files[0];

              reader.onloadend = () => {
                  console.log('On load end');
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
            /*if (input.currentTarget.src === this.props.convertedImgLink) {
                input.currentTarget.src = this.props.imgLink;
            }
            else {
                input.currentTarget.src = this.props.convertedImgLink;
            }*/
        }


  render() {
    return (
      <div className="ui fluid card equal height grid">
        <div className="ui fluid image">
          <img onClick={this.openModal.bind(this)} ref={this.cardImgRef} src={this.props.convertedImgLink}/>
        </div>
        <div className="content">
          <a className="ui basic image buttons label">
            <img src={this.props.gravatarLink}/>
            {this.props.uploaderName}
          </a>
          <button className="ui icon right floated button toExchange"  onClick={this._changeImage.bind(this)} title="Exchange image">
            <i className="exchange icon"></i>
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <div className="ui container ">
            <img className="ui fluid image fullDiv" src={(this.refs[this.cardImgRef]!==undefined?this.refs[this.cardImgRef].src:'Nothing to see here.')}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Card;
