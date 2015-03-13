
var React = require('react');
var classnames = require('classnames');

var Link = require('react-router').Link;

var Rebass = require('../../..');
var Button = Rebass.Button;

var Hero = require('./hero.jsx');
var Footer = require('./footer.jsx');
//var Section = require('./section.jsx');
var DemoBanner = require('./demo-banner.jsx');

module.exports = React.createClass({

  render: function() {

    var style = {
      minHeight: '100vh',
    };

    var classes = {
      demoBanner: classnames('p3', 'overflow-hidden', this.props.dark ? 'bg-silver' : 'bg-silver'),
    };

    return (
      <div style={style}>
        <Hero {...this.props} />
        <div className="container px2">
          <section id="intro" className="mt4">
            <p className="h2 bold">
              Themeable UI components built with <a href="//basscss.com">Basscss’s</a> low-level modular CSS.
            </p>
          </section>
          <section id="features" className="sm-flex py4 mxn2">
            <div className="sm-col-4 px2">
              <h2>Common Styling API</h2>
              <p>
                Basscss’s powerful utilities offer the ability to extend and create custom components
                without the need to manage style attributes and media queries.
              </p>
            </div>
            <div className="sm-col-4 px2">
              <h2>Themeable</h2>
              <p>
                Switch colors in real time or create custom themes to match your current styling.
                Basscss can even be incorporated into other CSS frameworks like Bootstrap, Foundation, or PureCSS.
              </p>
            </div>
            <div className="sm-col-4 px2">
              <h2>Just Add State</h2>
              <p>
                Use these content-agnostic components in any React project
                and spend less time worrying about what things look like.
              </p>
            </div>
          </section>
        </div>
        {/*
        <section id="examples-promo" className={classes.demoBanner}>
          <DemoBanner color={this.props.color} style={{opacity:.5}} />
        </section>
        */}
        <div className="container px2">
          <hr className={'border border-'+this.props.color} />
          <section id="cta" className="sm-flex flex-center py4">
            <div className="flex-auto">
              <h1>Install it now</h1>
              <p>Try it out in your own app</p>
            </div>
            <div className="sm-col-3">
              <Link to="Getting Started"
                className={'button button-big bg-'+this.props.color}>
                Getting Started
              </Link>
            </div>
          </section>
          <hr className={'border border-'+this.props.color} />
        </div>
        <Footer {...this.props} />
      </div>
    )
  }

});
