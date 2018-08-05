import {Component} from 'react';
import {ImageBackground,
    TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import{
    modificaTitulo
} from '../actions/OutrasAction';

class Feed extends Component {
    render (){
        return (
            <ImageBackground source={require('../img/5.png')}>
                <ScrollView>
                    <TextInput
                        value={this.props.titulo}
                        placeholder="Titulo"
                        placeholderTextColor='#000'
                        style={{fontSize:20, height:45}}
                        onChangeText={texto => this.props.modificaTitulo(texto)}
                    />
                </ScrollView>
            </ImageBackground>
        );
    }

}
const mapStateToProps = state =>{
    console.log(state);
    return(
        {
            titulo: state.OutrosReducer.titulo
        }
    );
}

export default connect(
    mapStateToProps,{
        modificaTitulo
    }
)(Feed);