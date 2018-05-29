import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPackage } from '../../state/actions';
import Home from '../../components/Home';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestPackage: bindActionCreators(requestPackage, dispatch),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;