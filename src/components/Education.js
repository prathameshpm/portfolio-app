import React, { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
  render() {
    return (
      <div className="educationPageStyle">
        <div className="container">
          <ul className="collapsible popout" data-collapsible="accordion">
            <li>
              <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
              <div className="collapsible-body"><span><img src={require('../images/atom.jpg')}></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur nulla vitae dui aliquet, sit amet sollicitudin purus egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam enim nibh, dignissim et ante sit amet, maximus mollis orci. Nullam eget commodo nibh, a fringilla mauris. Aliquam suscipit porttitor leo, at pulvinar mauris porttitor sit amet. Mauris porta nulla et justo iaculis, eu vehicula velit rhoncus. Integer fringilla ex non neque dapibus, nec aliquet nibh ullamcorper. Nunc ipsum mi, maximus ut ante eu, mattis rutrum eros. Mauris imperdiet dignissim dignissim. Suspendisse et nisl velit. Proin interdum placerat diam, scelerisque lacinia nulla varius non.

                Aliquam vel eros suscipit, dapibus odio ac, elementum nibh. Duis ante turpis, pellentesque vitae dictum non, mollis eget nisi. Integer eleifend eros in massa cursus ornare. Praesent finibus magna nec odio dignissim cursus. Aliquam interdum erat sed mauris pretium porta. Praesent euismod, purus ut ultricies hendrerit, ante augue placerat nibh, sed vehicula nibh nisl a est. Suspendisse tincidunt sed diam in elementum. Praesent pellentesque tempor enim, sed bibendum ante blandit sit amet. Aenean interdum nec quam mattis maximus.

              Donec nec mi commodo, faucibus felis at, dictum leo. Vivamus nisl odio, facilisis in tincidunt id, vulputate et turpis. Vestibulum sit amet scelerisque est. Maecenas at dolor sollicitudin, porta diam at, molestie elit. Integer scelerisque blandit tempor. Ut dignissim velit ex, tempor pellentesque risus pellentesque vitae. In tincidunt ipsum eros, eu vestibulum quam ullamcorper ac. Sed eu nisl non risus tempor consequat. Ut molestie fringilla felis quis lobortis. Vivamus a pellentesque n</span></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.t. Maecenas at dolor sollicitudin, porta diam at, molestie elit. Integer scelerisque blandit tempor. Ut dignissim velit ex, tempor pellentesque risus pellentesque vitae. In tincidunt ipsum eros, eu vestibulum quam ullamcorper ac. Sed eu nisl non risus tempor consequat. Ut molestie fringilla felis quis lobortis. Vivamus a pellentesque nisi. Etiam elit leo, aliquam sit amet aliquet pellentesque, tempor et elit.

                Morbi eu mollis eros. Nunc vitae malesuada massa, malesuada aliquet leo. Aenean sagittis leo ac condimentum ullamcorper. Proin eu magna odio. Sed et nulla vitae erat lobortis placerat eu sed tortor. Aliquam tincidunt id metus id luctus. Morbi ullamcorper a risus ac convallis. Proin eu massa felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ac maximus nulla. Aliquam imperdiet lacus et porttitor mattis. Aliquam posuere leo dui, eu iaculis ligula pulvinar et. Sed venenatis in arcu a tempor. Nulla volutpat, nibh vitae vestibulum euismod, mauris mi rhoncus leo, vel iaculis urna ipsum ut dolor.

              </span></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.  Proin eu massa felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ac maximus nulla. Aliquam imperdiet lacus et porttitor mattis. Aliquam posuere leo dui, eu iaculis ligula pulvinar et. Sed venenatis in arcu a tempor. Nulla volutpat, nibh vitae vestibulum euismod, mauris mi rhoncus leo, vel iaculis urna ipsum ut dolor.

              Cras velit lacus, viverra vel efficitur ac, imperdiet ac magna. Nam eget libero pharetra, eleifend augue eu, commodo eros. Fusce efficitur erat placerat diam consequat auctor. Donec semper arcu mi, et efficitur risus vestibulum quis. Aenean commodo sit amet odio eu rutrum. Etiam consequat feugiat leo, pellentesque ultrices mi. Ut tincidunt convallis mi, vel ornare eros imperdiet sit amet. Curabitur et lobortis diam, nec pharetra neque. Sed quis ultricies metus. Nulla felis est, varius quis congue aliquam, ullamcorper sit amet ante. Aliquam purus nulla, blandit vel placerat eget, porta porta elit. Phasellus ultrices venenatis massa, in tristique nisl facilisis vel. Vestibulum egestas blandit nibh nec fermentum.</span></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;
