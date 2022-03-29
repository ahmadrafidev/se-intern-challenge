import {Fragment} from 'react';
import MainNavigation from './main-navigation';
import Footer from './footer';

export default function Layout(){
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer/>
    </Fragment>
  );
}
