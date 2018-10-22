/**
 * https://stackoverflow.com/questions/27992992/i-need-list-of-all-class-name-of-font-awesome

```
var groups = [];
var sections = document.getElementsByClassName('cheatsheet-set');
for (const section of sections) {
  const names = [];
  const items = {}
  items.type = section.id
  items.names = names
  var icons = section.getElementsByClassName('icon');
  for (const icon of icons) {
    const name = icon.getElementsByTagName('dd')[0].innerText;
    const unicode = icon.getElementsByTagName('dd')[1].innerText;
    // names.push({
    //     className: name,
    //     unicode: unicode
    // });
    names.push(name)
  }
  groups.push(items)
}
console.log(JSON.stringify(groups));
```
 *
 */
export default [{
  'type': 'solid',
  'names': ['ad', 'address-book', 'address-card', 'adjust', 'air-freshener', 'align-center', 'align-justify', 'align-left', 'align-right', 'allergies', 'ambulance', 'american-sign-language-interpreting', 'anchor', 'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'angry', 'ankh', 'apple-alt', 'archive', 'archway', 'arrow-alt-circle-down', 'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-right', 'arrow-circle-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'arrows-alt-h', 'arrows-alt-v', 'assistive-listening-systems', 'asterisk', 'at', 'atlas', 'atom', 'audio-description', 'award', 'backspace', 'backward', 'balance-scale', 'ban', 'band-aid', 'barcode', 'bars', 'baseball-ball', 'basketball-ball', 'bath', 'battery-empty', 'battery-full', 'battery-half', 'battery-quarter', 'battery-three-quarters', 'bed', 'beer', 'bell', 'bell-slash', 'bezier-curve', 'bible', 'bicycle', 'binoculars', 'birthday-cake', 'blender', 'blender-phone', 'blind', 'bold', 'bolt', 'bomb', 'bone', 'bong', 'book', 'book-dead', 'book-open', 'book-reader', 'bookmark', 'bowling-ball', 'box', 'box-open', 'boxes', 'braille', 'brain', 'briefcase', 'briefcase-medical', 'broadcast-tower', 'broom', 'brush', 'bug', 'building', 'bullhorn', 'bullseye', 'burn', 'bus', 'bus-alt', 'business-time', 'calculator', 'calendar', 'calendar-alt', 'calendar-check', 'calendar-minus', 'calendar-plus', 'calendar-times', 'camera', 'camera-retro', 'campground', 'cannabis', 'capsules', 'car', 'car-alt', 'car-battery', 'car-crash', 'car-side', 'caret-down', 'caret-left', 'caret-right', 'caret-square-down', 'caret-square-left', 'caret-square-right', 'caret-square-up', 'caret-up', 'cart-arrow-down', 'cart-plus', 'cat', 'certificate', 'chair', 'chalkboard', 'chalkboard-teacher', 'charging-station', 'chart-area', 'chart-bar', 'chart-line', 'chart-pie', 'check', 'check-circle', 'check-double', 'check-square', 'chess', 'chess-bishop', 'chess-board', 'chess-king', 'chess-knight', 'chess-pawn', 'chess-queen', 'chess-rook', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-right', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'child', 'church', 'circle', 'circle-notch', 'city', 'clipboard', 'clipboard-check', 'clipboard-list', 'clock', 'clone', 'closed-captioning', 'cloud', 'cloud-download-alt', 'cloud-moon', 'cloud-sun', 'cloud-upload-alt', 'cocktail', 'code', 'code-branch', 'coffee', 'cog', 'cogs', 'coins', 'columns', 'comment', 'comment-alt', 'comment-dollar', 'comment-dots', 'comment-slash', 'comments', 'comments-dollar', 'compact-disc', 'compass', 'compress', 'concierge-bell', 'cookie', 'cookie-bite', 'copy', 'copyright', 'couch', 'credit-card', 'crop', 'crop-alt', 'cross', 'crosshairs', 'crow', 'crown', 'cube', 'cubes', 'cut', 'database', 'deaf', 'desktop', 'dharmachakra', 'diagnoses', 'dice', 'dice-d20', 'dice-d6', 'dice-five', 'dice-four', 'dice-one', 'dice-six', 'dice-three', 'dice-two', 'digital-tachograph', 'directions', 'divide', 'dizzy', 'dna', 'dog', 'dollar-sign', 'dolly', 'dolly-flatbed', 'donate', 'door-closed', 'door-open', 'dot-circle', 'dove', 'download', 'drafting-compass', 'dragon', 'draw-polygon', 'drum', 'drum-steelpan', 'drumstick-bite', 'dumbbell', 'dungeon', 'edit', 'eject', 'ellipsis-h', 'ellipsis-v', 'envelope', 'envelope-open', 'envelope-open-text', 'envelope-square', 'equals', 'eraser', 'euro-sign', 'exchange-alt', 'exclamation', 'exclamation-circle', 'exclamation-triangle', 'expand', 'expand-arrows-alt', 'external-link-alt', 'external-link-square-alt', 'eye', 'eye-dropper', 'eye-slash', 'fast-backward', 'fast-forward', 'fax', 'feather', 'feather-alt', 'female', 'fighter-jet', 'file', 'file-alt', 'file-archive', 'file-audio', 'file-code', 'file-contract', 'file-csv', 'file-download', 'file-excel', 'file-export', 'file-image', 'file-import', 'file-invoice', 'file-invoice-dollar', 'file-medical', 'file-medical-alt', 'file-pdf', 'file-powerpoint', 'file-prescription', 'file-signature', 'file-upload', 'file-video', 'file-word', 'fill', 'fill-drip', 'film', 'filter', 'fingerprint', 'fire', 'fire-extinguisher', 'first-aid', 'fish', 'fist-raised', 'flag', 'flag-checkered', 'flask', 'flushed', 'folder', 'folder-minus', 'folder-open', 'folder-plus', 'font', 'font-awesome-logo-full', 'football-ball', 'forward', 'frog', 'frown', 'frown-open', 'funnel-dollar', 'futbol', 'gamepad', 'gas-pump', 'gavel', 'gem', 'genderless', 'ghost', 'gift', 'glass-martini', 'glass-martini-alt', 'glasses', 'globe', 'globe-africa', 'globe-americas', 'globe-asia', 'golf-ball', 'gopuram', 'graduation-cap', 'greater-than', 'greater-than-equal', 'grimace', 'grin', 'grin-alt', 'grin-beam', 'grin-beam-sweat', 'grin-hearts', 'grin-squint', 'grin-squint-tears', 'grin-stars', 'grin-tears', 'grin-tongue', 'grin-tongue-squint', 'grin-tongue-wink', 'grin-wink', 'grip-horizontal', 'grip-vertical', 'h-square', 'hammer', 'hamsa', 'hand-holding', 'hand-holding-heart', 'hand-holding-usd', 'hand-lizard', 'hand-paper', 'hand-peace', 'hand-point-down', 'hand-point-left', 'hand-point-right', 'hand-point-up', 'hand-pointer', 'hand-rock', 'hand-scissors', 'hand-spock', 'hands', 'hands-helping', 'handshake', 'hanukiah', 'hashtag', 'hat-wizard', 'haykal', 'hdd', 'heading', 'headphones', 'headphones-alt', 'headset', 'heart', 'heartbeat', 'helicopter', 'highlighter', 'hiking', 'hippo', 'history', 'hockey-puck', 'home', 'horse', 'hospital', 'hospital-alt', 'hospital-symbol', 'hot-tub', 'hotel', 'hourglass', 'hourglass-end', 'hourglass-half', 'hourglass-start', 'house-damage', 'hryvnia', 'i-cursor', 'id-badge', 'id-card', 'id-card-alt', 'image', 'images', 'inbox', 'indent', 'industry', 'infinity', 'info', 'info-circle', 'italic', 'jedi', 'joint', 'journal-whills', 'kaaba', 'key', 'keyboard', 'khanda', 'kiss', 'kiss-beam', 'kiss-wink-heart', 'kiwi-bird', 'landmark', 'language', 'laptop', 'laptop-code', 'laugh', 'laugh-beam', 'laugh-squint', 'laugh-wink', 'layer-group', 'leaf', 'lemon', 'less-than', 'less-than-equal', 'level-down-alt', 'level-up-alt', 'life-ring', 'lightbulb', 'link', 'lira-sign', 'list', 'list-alt', 'list-ol', 'list-ul', 'location-arrow', 'lock', 'lock-open', 'long-arrow-alt-down', 'long-arrow-alt-left', 'long-arrow-alt-right', 'long-arrow-alt-up', 'low-vision', 'luggage-cart', 'magic', 'magnet', 'mail-bulk', 'male', 'map', 'map-marked', 'map-marked-alt', 'map-marker', 'map-marker-alt', 'map-pin', 'map-signs', 'marker', 'mars', 'mars-double', 'mars-stroke', 'mars-stroke-h', 'mars-stroke-v', 'mask', 'medal', 'medkit', 'meh', 'meh-blank', 'meh-rolling-eyes', 'memory', 'menorah', 'mercury', 'microchip', 'microphone', 'microphone-alt', 'microphone-alt-slash', 'microphone-slash', 'microscope', 'minus', 'minus-circle', 'minus-square', 'mobile', 'mobile-alt', 'money-bill', 'money-bill-alt', 'money-bill-wave', 'money-bill-wave-alt', 'money-check', 'money-check-alt', 'monument', 'moon', 'mortar-pestle', 'mosque', 'motorcycle', 'mountain', 'mouse-pointer', 'music', 'network-wired', 'neuter', 'newspaper', 'not-equal', 'notes-medical', 'object-group', 'object-ungroup', 'oil-can', 'om', 'otter', 'outdent', 'paint-brush', 'paint-roller', 'palette', 'pallet', 'paper-plane', 'paperclip', 'parachute-box', 'paragraph', 'parking', 'passport', 'pastafarianism', 'paste', 'pause', 'pause-circle', 'paw', 'peace', 'pen', 'pen-alt', 'pen-fancy', 'pen-nib', 'pen-square', 'pencil-alt', 'pencil-ruler', 'people-carry', 'percent', 'percentage', 'phone', 'phone-slash', 'phone-square', 'phone-volume', 'piggy-bank', 'pills', 'place-of-worship', 'plane', 'plane-arrival', 'plane-departure', 'play', 'play-circle', 'plug', 'plus', 'plus-circle', 'plus-square', 'podcast', 'poll', 'poll-h', 'poo', 'poop', 'portrait', 'pound-sign', 'power-off', 'pray', 'praying-hands', 'prescription', 'prescription-bottle', 'prescription-bottle-alt', 'print', 'procedures', 'project-diagram', 'puzzle-piece', 'qrcode', 'question', 'question-circle', 'quidditch', 'quote-left', 'quote-right', 'quran', 'random', 'receipt', 'recycle', 'redo', 'redo-alt', 'registered', 'reply', 'reply-all', 'retweet', 'ribbon', 'ring', 'road', 'robot', 'rocket', 'route', 'rss', 'rss-square', 'ruble-sign', 'ruler', 'ruler-combined', 'ruler-horizontal', 'ruler-vertical', 'running', 'rupee-sign', 'sad-cry', 'sad-tear', 'save', 'school', 'screwdriver', 'scroll', 'search', 'search-dollar', 'search-location', 'search-minus', 'search-plus', 'seedling', 'server', 'shapes', 'share', 'share-alt', 'share-alt-square', 'share-square', 'shekel-sign', 'shield-alt', 'ship', 'shipping-fast', 'shoe-prints', 'shopping-bag', 'shopping-basket', 'shopping-cart', 'shower', 'shuttle-van', 'sign', 'sign-in-alt', 'sign-language', 'sign-out-alt', 'signal', 'signature', 'sitemap', 'skull', 'skull-crossbones', 'slash', 'sliders-h', 'smile', 'smile-beam', 'smile-wink', 'smoking', 'smoking-ban', 'snowflake', 'socks', 'solar-panel', 'sort', 'sort-alpha-down', 'sort-alpha-up', 'sort-amount-down', 'sort-amount-up', 'sort-down', 'sort-numeric-down', 'sort-numeric-up', 'sort-up', 'spa', 'space-shuttle', 'spider', 'spinner', 'splotch', 'spray-can', 'square', 'square-full', 'square-root-alt', 'stamp', 'star', 'star-and-crescent', 'star-half', 'star-half-alt', 'star-of-david', 'star-of-life', 'step-backward', 'step-forward', 'stethoscope', 'sticky-note', 'stop', 'stop-circle', 'stopwatch', 'store', 'store-alt', 'stream', 'street-view', 'strikethrough', 'stroopwafel', 'subscript', 'subway', 'suitcase', 'suitcase-rolling', 'sun', 'superscript', 'surprise', 'swatchbook', 'swimmer', 'swimming-pool', 'synagogue', 'sync', 'sync-alt', 'syringe', 'table', 'table-tennis', 'tablet', 'tablet-alt', 'tablets', 'tachometer-alt', 'tag', 'tags', 'tape', 'tasks', 'taxi', 'teeth', 'teeth-open', 'terminal', 'text-height', 'text-width', 'th', 'th-large', 'th-list', 'theater-masks', 'thermometer', 'thermometer-empty', 'thermometer-full', 'thermometer-half', 'thermometer-quarter', 'thermometer-three-quarters', 'thumbs-down', 'thumbs-up', 'thumbtack', 'ticket-alt', 'times', 'times-circle', 'tint', 'tint-slash', 'tired', 'toggle-off', 'toggle-on', 'toilet-paper', 'toolbox', 'tooth', 'torah', 'torii-gate', 'tractor', 'trademark', 'traffic-light', 'train', 'transgender', 'transgender-alt', 'trash', 'trash-alt', 'tree', 'trophy', 'truck', 'truck-loading', 'truck-monster', 'truck-moving', 'truck-pickup', 'tshirt', 'tty', 'tv', 'umbrella', 'umbrella-beach', 'underline', 'undo', 'undo-alt', 'universal-access', 'university', 'unlink', 'unlock', 'unlock-alt', 'upload', 'user', 'user-alt', 'user-alt-slash', 'user-astronaut', 'user-check', 'user-circle', 'user-clock', 'user-cog', 'user-edit', 'user-friends', 'user-graduate', 'user-injured', 'user-lock', 'user-md', 'user-minus', 'user-ninja', 'user-plus', 'user-secret', 'user-shield', 'user-slash', 'user-tag', 'user-tie', 'user-times', 'users', 'users-cog', 'utensil-spoon', 'utensils', 'vector-square', 'venus', 'venus-double', 'venus-mars', 'vial', 'vials', 'video', 'video-slash', 'vihara', 'volleyball-ball', 'volume-down', 'volume-mute', 'volume-off', 'volume-up', 'walking', 'wallet', 'warehouse', 'weight', 'weight-hanging', 'wheelchair', 'wifi', 'wind', 'window-close', 'window-maximize', 'window-minimize', 'window-restore', 'wine-bottle', 'wine-glass', 'wine-glass-alt', 'won-sign', 'wrench', 'x-ray', 'yen-sign', 'yin-yang']
}, {
  'type': 'regular',
  'names': ['address-book', 'address-card', 'angry', 'arrow-alt-circle-down', 'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up', 'bell', 'bell-slash', 'bookmark', 'building', 'calendar', 'calendar-alt', 'calendar-check', 'calendar-minus', 'calendar-plus', 'calendar-times', 'caret-square-down', 'caret-square-left', 'caret-square-right', 'caret-square-up', 'chart-bar', 'check-circle', 'check-square', 'circle', 'clipboard', 'clock', 'clone', 'closed-captioning', 'comment', 'comment-alt', 'comment-dots', 'comments', 'compass', 'copy', 'copyright', 'credit-card', 'dizzy', 'dot-circle', 'edit', 'envelope', 'envelope-open', 'eye', 'eye-slash', 'file', 'file-alt', 'file-archive', 'file-audio', 'file-code', 'file-excel', 'file-image', 'file-pdf', 'file-powerpoint', 'file-video', 'file-word', 'flag', 'flushed', 'folder', 'folder-open', 'font-awesome-logo-full', 'frown', 'frown-open', 'futbol', 'gem', 'grimace', 'grin', 'grin-alt', 'grin-beam', 'grin-beam-sweat', 'grin-hearts', 'grin-squint', 'grin-squint-tears', 'grin-stars', 'grin-tears', 'grin-tongue', 'grin-tongue-squint', 'grin-tongue-wink', 'grin-wink', 'hand-lizard', 'hand-paper', 'hand-peace', 'hand-point-down', 'hand-point-left', 'hand-point-right', 'hand-point-up', 'hand-pointer', 'hand-rock', 'hand-scissors', 'hand-spock', 'handshake', 'hdd', 'heart', 'hospital', 'hourglass', 'id-badge', 'id-card', 'image', 'images', 'keyboard', 'kiss', 'kiss-beam', 'kiss-wink-heart', 'laugh', 'laugh-beam', 'laugh-squint', 'laugh-wink', 'lemon', 'life-ring', 'lightbulb', 'list-alt', 'map', 'meh', 'meh-blank', 'meh-rolling-eyes', 'minus-square', 'money-bill-alt', 'moon', 'newspaper', 'object-group', 'object-ungroup', 'paper-plane', 'pause-circle', 'play-circle', 'plus-square', 'question-circle', 'registered', 'sad-cry', 'sad-tear', 'save', 'share-square', 'smile', 'smile-beam', 'smile-wink', 'snowflake', 'square', 'star', 'star-half', 'sticky-note', 'stop-circle', 'sun', 'surprise', 'thumbs-down', 'thumbs-up', 'times-circle', 'tired', 'trash-alt', 'user', 'user-circle', 'window-close', 'window-maximize', 'window-minimize', 'window-restore']
}, {
  'type': 'brands',
  'names': ['500px', 'accessible-icon', 'accusoft', 'acquisitions-incorporated', 'adn', 'adversal', 'affiliatetheme', 'algolia', 'alipay', 'amazon', 'amazon-pay', 'amilia', 'android', 'angellist', 'angrycreative', 'angular', 'app-store', 'app-store-ios', 'apper', 'apple', 'apple-pay', 'asymmetrik', 'audible', 'autoprefixer', 'avianex', 'aviato', 'aws', 'bandcamp', 'behance', 'behance-square', 'bimobject', 'bitbucket', 'bitcoin', 'bity', 'black-tie', 'blackberry', 'blogger', 'blogger-b', 'bluetooth', 'bluetooth-b', 'btc', 'buromobelexperte', 'buysellads', 'cc-amazon-pay', 'cc-amex', 'cc-apple-pay', 'cc-diners-club', 'cc-discover', 'cc-jcb', 'cc-mastercard', 'cc-paypal', 'cc-stripe', 'cc-visa', 'centercode', 'chrome', 'cloudscale', 'cloudsmith', 'cloudversify', 'codepen', 'codiepie', 'connectdevelop', 'contao', 'cpanel', 'creative-commons', 'creative-commons-by', 'creative-commons-nc', 'creative-commons-nc-eu', 'creative-commons-nc-jp', 'creative-commons-nd', 'creative-commons-pd', 'creative-commons-pd-alt', 'creative-commons-remix', 'creative-commons-sa', 'creative-commons-sampling', 'creative-commons-sampling-plus', 'creative-commons-share', 'creative-commons-zero', 'critical-role', 'css3', 'css3-alt', 'cuttlefish', 'd-and-d', 'dashcube', 'delicious', 'deploydog', 'deskpro', 'dev', 'deviantart', 'digg', 'digital-ocean', 'discord', 'discourse', 'dochub', 'docker', 'draft2digital', 'dribbble', 'dribbble-square', 'dropbox', 'drupal', 'dyalog', 'earlybirds', 'ebay', 'edge', 'elementor', 'ello', 'ember', 'empire', 'envira', 'erlang', 'ethereum', 'etsy', 'expeditedssl', 'facebook', 'facebook-f', 'facebook-messenger', 'facebook-square', 'fantasy-flight-games', 'firefox', 'first-order', 'first-order-alt', 'firstdraft', 'flickr', 'flipboard', 'fly', 'font-awesome', 'font-awesome-alt', 'font-awesome-flag', 'font-awesome-logo-full', 'fonticons', 'fonticons-fi', 'fort-awesome', 'fort-awesome-alt', 'forumbee', 'foursquare', 'free-code-camp', 'freebsd', 'fulcrum', 'galactic-republic', 'galactic-senate', 'get-pocket', 'gg', 'gg-circle', 'git', 'git-square', 'github', 'github-alt', 'github-square', 'gitkraken', 'gitlab', 'gitter', 'glide', 'glide-g', 'gofore', 'goodreads', 'goodreads-g', 'google', 'google-drive', 'google-play', 'google-plus', 'google-plus-g', 'google-plus-square', 'google-wallet', 'gratipay', 'grav', 'gripfire', 'grunt', 'gulp', 'hacker-news', 'hacker-news-square', 'hackerrank', 'hips', 'hire-a-helper', 'hooli', 'hornbill', 'hotjar', 'houzz', 'html5', 'hubspot', 'imdb', 'instagram', 'internet-explorer', 'ioxhost', 'itunes', 'itunes-note', 'java', 'jedi-order', 'jenkins', 'joget', 'joomla', 'js', 'js-square', 'jsfiddle', 'kaggle', 'keybase', 'keycdn', 'kickstarter', 'kickstarter-k', 'korvue', 'laravel', 'lastfm', 'lastfm-square', 'leanpub', 'less', 'line', 'linkedin', 'linkedin-in', 'linode', 'linux', 'lyft', 'magento', 'mailchimp', 'mandalorian', 'markdown', 'mastodon', 'maxcdn', 'medapps', 'medium', 'medium-m', 'medrt', 'meetup', 'megaport', 'microsoft', 'mix', 'mixcloud', 'mizuni', 'modx', 'monero', 'napster', 'neos', 'nimblr', 'nintendo-switch', 'node', 'node-js', 'npm', 'ns8', 'nutritionix', 'odnoklassniki', 'odnoklassniki-square', 'old-republic', 'opencart', 'openid', 'opera', 'optin-monster', 'osi', 'page4', 'pagelines', 'palfed', 'patreon', 'paypal', 'penny-arcade', 'periscope', 'phabricator', 'phoenix-framework', 'phoenix-squadron', 'php', 'pied-piper', 'pied-piper-alt', 'pied-piper-hat', 'pied-piper-pp', 'pinterest', 'pinterest-p', 'pinterest-square', 'playstation', 'product-hunt', 'pushed', 'python', 'qq', 'quinscape', 'quora', 'r-project', 'ravelry', 'react', 'readme', 'rebel', 'red-river', 'reddit', 'reddit-alien', 'reddit-square', 'rendact', 'renren', 'replyd', 'researchgate', 'resolving', 'rev', 'rocketchat', 'rockrms', 'safari', 'sass', 'schlix', 'scribd', 'searchengin', 'sellcast', 'sellsy', 'servicestack', 'shirtsinbulk', 'shopware', 'simplybuilt', 'sistrix', 'sith', 'skyatlas', 'skype', 'slack', 'slack-hash', 'slideshare', 'snapchat', 'snapchat-ghost', 'snapchat-square', 'soundcloud', 'speakap', 'spotify', 'squarespace', 'stack-exchange', 'stack-overflow', 'staylinked', 'steam', 'steam-square', 'steam-symbol', 'sticker-mule', 'strava', 'stripe', 'stripe-s', 'studiovinari', 'stumbleupon', 'stumbleupon-circle', 'superpowers', 'supple', 'teamspeak', 'telegram', 'telegram-plane', 'tencent-weibo', 'the-red-yeti', 'themeco', 'themeisle', 'trade-federation', 'trello', 'tripadvisor', 'tumblr', 'tumblr-square', 'twitch', 'twitter', 'twitter-square', 'typo3', 'uber', 'uikit', 'uniregistry', 'untappd', 'usb', 'ussunnah', 'vaadin', 'viacoin', 'viadeo', 'viadeo-square', 'viber', 'vimeo', 'vimeo-square', 'vimeo-v', 'vine', 'vk', 'vnv', 'vuejs', 'weebly', 'weibo', 'weixin', 'whatsapp', 'whatsapp-square', 'whmcs', 'wikipedia-w', 'windows', 'wix', 'wizards-of-the-coast', 'wolf-pack-battalion', 'wordpress', 'wordpress-simple', 'wpbeginner', 'wpexplorer', 'wpforms', 'xbox', 'xing', 'xing-square', 'y-combinator', 'yahoo', 'yandex', 'yandex-international', 'yelp', 'yoast', 'youtube', 'youtube-square', 'zhihu']
}, {
  'type': 'f470',
  names: ['fa-500px', 'fa-address-book', 'fa-address-book-o', 'fa-address-card', 'fa-address-card-o', 'fa-adjust', 'fa-adn', 'fa-align-center', 'fa-align-justify', 'fa-align-left', 'fa-align-right', 'fa-amazon', 'fa-ambulance', 'fa-american-sign-language-interpreting', 'fa-anchor', 'fa-android', 'fa-angellist', 'fa-angle-double-down', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 'fa-angle-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-apple', 'fa-archive', 'fa-area-chart', 'fa-arrow-circle-down', 'fa-arrow-circle-left', 'fa-arrow-circle-o-down', 'fa-arrow-circle-o-left', 'fa-arrow-circle-o-right', 'fa-arrow-circle-o-up', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-down', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrows', 'fa-arrows-alt', 'fa-arrows-h', 'fa-arrows-v', 'fa-assistive-listening-systems', 'fa-asterisk', 'fa-at', 'fa-audio-description', 'fa-backward', 'fa-balance-scale', 'fa-ban', 'fa-bandcamp', 'fa-bar-chart', 'fa-barcode', 'fa-bars', 'fa-bath', 'fa-battery-empty', 'fa-battery-full', 'fa-battery-half', 'fa-battery-quarter', 'fa-battery-three-quarters', 'fa-bed', 'fa-beer', 'fa-behance', 'fa-behance-square', 'fa-bell', 'fa-bell-o', 'fa-bell-slash', 'fa-bell-slash-o', 'fa-bicycle', 'fa-binoculars', 'fa-birthday-cake', 'fa-bitbucket', 'fa-bitbucket-square', 'fa-black-tie', 'fa-blind', 'fa-bluetooth', 'fa-bluetooth-b', 'fa-bold', 'fa-bolt', 'fa-bomb', 'fa-book', 'fa-bookmark', 'fa-bookmark-o', 'fa-braille', 'fa-briefcase', 'fa-btc', 'fa-bug', 'fa-building', 'fa-building-o', 'fa-bullhorn', 'fa-bullseye', 'fa-bus', 'fa-buysellads', 'fa-calculator', 'fa-calendar', 'fa-calendar-check-o', 'fa-calendar-minus-o', 'fa-calendar-o', 'fa-calendar-plus-o', 'fa-calendar-times-o', 'fa-camera', 'fa-camera-retro', 'fa-car', 'fa-caret-down', 'fa-caret-left', 'fa-caret-right', 'fa-caret-square-o-down', 'fa-caret-square-o-left', 'fa-caret-square-o-right', 'fa-caret-square-o-up', 'fa-caret-up', 'fa-cart-arrow-down', 'fa-cart-plus', 'fa-cc', 'fa-cc-amex', 'fa-cc-diners-club', 'fa-cc-discover', 'fa-cc-jcb', 'fa-cc-mastercard', 'fa-cc-paypal', 'fa-cc-stripe', 'fa-cc-visa', 'fa-certificate', 'fa-chain-broken', 'fa-check', 'fa-check-circle', 'fa-check-circle-o', 'fa-check-square', 'fa-check-square-o', 'fa-chevron-circle-down', 'fa-chevron-circle-left', 'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-down', 'fa-chevron-left', 'fa-chevron-right', 'fa-chevron-up', 'fa-child', 'fa-chrome', 'fa-circle', 'fa-circle-o', 'fa-circle-o-notch', 'fa-circle-thin', 'fa-clipboard', 'fa-clock-o', 'fa-clone', 'fa-cloud', 'fa-cloud-download', 'fa-cloud-upload', 'fa-code', 'fa-code-fork', 'fa-codepen', 'fa-codiepie', 'fa-coffee', 'fa-cog', 'fa-cogs', 'fa-columns', 'fa-comment', 'fa-comment-o', 'fa-commenting', 'fa-commenting-o', 'fa-comments', 'fa-comments-o', 'fa-compass', 'fa-compress', 'fa-connectdevelop', 'fa-contao', 'fa-copyright', 'fa-creative-commons', 'fa-credit-card', 'fa-credit-card-alt', 'fa-crop', 'fa-crosshairs', 'fa-css3', 'fa-cube', 'fa-cubes', 'fa-cutlery', 'fa-dashcube', 'fa-database', 'fa-deaf', 'fa-delicious', 'fa-desktop', 'fa-deviantart', 'fa-diamond', 'fa-digg', 'fa-dot-circle-o', 'fa-download', 'fa-dribbble', 'fa-dropbox', 'fa-drupal', 'fa-edge', 'fa-eercast', 'fa-eject', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-empire', 'fa-envelope', 'fa-envelope-o', 'fa-envelope-open', 'fa-envelope-open-o', 'fa-envelope-square', 'fa-envira', 'fa-eraser', 'fa-etsy', 'fa-eur', 'fa-exchange', 'fa-exclamation', 'fa-exclamation-circle', 'fa-exclamation-triangle', 'fa-expand', 'fa-expeditedssl', 'fa-external-link', 'fa-external-link-square', 'fa-eye', 'fa-eye-slash', 'fa-eyedropper', 'fa-facebook', 'fa-facebook-official', 'fa-facebook-square', 'fa-fast-backward', 'fa-fast-forward', 'fa-fax', 'fa-female', 'fa-fighter-jet', 'fa-file', 'fa-file-archive-o', 'fa-file-audio-o', 'fa-file-code-o', 'fa-file-excel-o', 'fa-file-image-o', 'fa-file-o', 'fa-file-pdf-o', 'fa-file-powerpoint-o', 'fa-file-text', 'fa-file-text-o', 'fa-file-video-o', 'fa-file-word-o', 'fa-files-o', 'fa-film', 'fa-filter', 'fa-fire', 'fa-fire-extinguisher', 'fa-firefox', 'fa-first-order', 'fa-flag', 'fa-flag-checkered', 'fa-flag-o', 'fa-flask', 'fa-flickr', 'fa-floppy-o', 'fa-folder', 'fa-folder-o', 'fa-folder-open', 'fa-folder-open-o', 'fa-font', 'fa-font-awesome', 'fa-fonticons', 'fa-fort-awesome', 'fa-forumbee', 'fa-forward', 'fa-foursquare', 'fa-free-code-camp', 'fa-frown-o', 'fa-futbol-o', 'fa-gamepad', 'fa-gavel', 'fa-gbp', 'fa-genderless', 'fa-get-pocket', 'fa-gg', 'fa-gg-circle', 'fa-gift', 'fa-git', 'fa-git-square', 'fa-github', 'fa-github-alt', 'fa-github-square', 'fa-gitlab', 'fa-glass', 'fa-glide', 'fa-glide-g', 'fa-globe', 'fa-google', 'fa-google-plus', 'fa-google-plus-official', 'fa-google-plus-square', 'fa-google-wallet', 'fa-graduation-cap', 'fa-gratipay', 'fa-grav', 'fa-h-square', 'fa-hacker-news', 'fa-hand-lizard-o', 'fa-hand-o-down', 'fa-hand-o-left', 'fa-hand-o-right', 'fa-hand-o-up', 'fa-hand-paper-o', 'fa-hand-peace-o', 'fa-hand-pointer-o', 'fa-hand-rock-o', 'fa-hand-scissors-o', 'fa-hand-spock-o', 'fa-handshake-o', 'fa-hashtag', 'fa-hdd-o', 'fa-header', 'fa-headphones', 'fa-heart', 'fa-heart-o', 'fa-heartbeat', 'fa-history', 'fa-home', 'fa-hospital-o', 'fa-hourglass', 'fa-hourglass-end', 'fa-hourglass-half', 'fa-hourglass-o', 'fa-hourglass-start', 'fa-houzz', 'fa-html5', 'fa-i-cursor', 'fa-id-badge', 'fa-id-card', 'fa-id-card-o', 'fa-ils', 'fa-imdb', 'fa-inbox', 'fa-indent', 'fa-industry', 'fa-info', 'fa-info-circle', 'fa-inr', 'fa-instagram', 'fa-internet-explorer', 'fa-ioxhost', 'fa-italic', 'fa-joomla', 'fa-jpy', 'fa-jsfiddle', 'fa-key', 'fa-keyboard-o', 'fa-krw', 'fa-language', 'fa-laptop', 'fa-lastfm', 'fa-lastfm-square', 'fa-leaf', 'fa-leanpub', 'fa-lemon-o', 'fa-level-down', 'fa-level-up', 'fa-life-ring', 'fa-lightbulb-o', 'fa-line-chart', 'fa-link', 'fa-linkedin', 'fa-linkedin-square', 'fa-linode', 'fa-linux', 'fa-list', 'fa-list-alt', 'fa-list-ol', 'fa-list-ul', 'fa-location-arrow', 'fa-lock', 'fa-long-arrow-down', 'fa-long-arrow-left', 'fa-long-arrow-right', 'fa-long-arrow-up', 'fa-low-vision', 'fa-magic', 'fa-magnet', 'fa-male', 'fa-map', 'fa-map-marker', 'fa-map-o', 'fa-map-pin', 'fa-map-signs', 'fa-mars', 'fa-mars-double', 'fa-mars-stroke', 'fa-mars-stroke-h', 'fa-mars-stroke-v', 'fa-maxcdn', 'fa-meanpath', 'fa-medium', 'fa-medkit', 'fa-meetup', 'fa-meh-o', 'fa-mercury', 'fa-microchip', 'fa-microphone', 'fa-microphone-slash', 'fa-minus', 'fa-minus-circle', 'fa-minus-square', 'fa-minus-square-o', 'fa-mixcloud', 'fa-mobile', 'fa-modx', 'fa-money', 'fa-moon-o', 'fa-motorcycle', 'fa-mouse-pointer', 'fa-music', 'fa-neuter', 'fa-newspaper-o', 'fa-object-group', 'fa-object-ungroup', 'fa-odnoklassniki', 'fa-odnoklassniki-square', 'fa-opencart', 'fa-openid', 'fa-opera', 'fa-optin-monster', 'fa-outdent', 'fa-pagelines', 'fa-paint-brush', 'fa-paper-plane', 'fa-paper-plane-o', 'fa-paperclip', 'fa-paragraph', 'fa-pause', 'fa-pause-circle', 'fa-pause-circle-o', 'fa-paw', 'fa-paypal', 'fa-pencil', 'fa-pencil-square', 'fa-pencil-square-o', 'fa-percent', 'fa-phone', 'fa-phone-square', 'fa-picture-o', 'fa-pie-chart', 'fa-pied-piper', 'fa-pied-piper-alt', 'fa-pied-piper-pp', 'fa-pinterest', 'fa-pinterest-p', 'fa-pinterest-square', 'fa-plane', 'fa-play', 'fa-play-circle', 'fa-play-circle-o', 'fa-plug', 'fa-plus', 'fa-plus-circle', 'fa-plus-square', 'fa-plus-square-o', 'fa-podcast', 'fa-power-off', 'fa-print', 'fa-product-hunt', 'fa-puzzle-piece', 'fa-qq', 'fa-qrcode', 'fa-question', 'fa-question-circle', 'fa-question-circle-o', 'fa-quora', 'fa-quote-left', 'fa-quote-right', 'fa-random', 'fa-ravelry', 'fa-rebel', 'fa-recycle', 'fa-reddit', 'fa-reddit-alien', 'fa-reddit-square', 'fa-refresh', 'fa-registered', 'fa-renren', 'fa-repeat', 'fa-reply', 'fa-reply-all', 'fa-retweet', 'fa-road', 'fa-rocket', 'fa-rss', 'fa-rss-square', 'fa-rub', 'fa-safari', 'fa-scissors', 'fa-scribd', 'fa-search', 'fa-search-minus', 'fa-search-plus', 'fa-sellsy', 'fa-server', 'fa-share', 'fa-share-alt', 'fa-share-alt-square', 'fa-share-square', 'fa-share-square-o', 'fa-shield', 'fa-ship', 'fa-shirtsinbulk', 'fa-shopping-bag', 'fa-shopping-basket', 'fa-shopping-cart', 'fa-shower', 'fa-sign-in', 'fa-sign-language', 'fa-sign-out', 'fa-signal', 'fa-simplybuilt', 'fa-sitemap', 'fa-skyatlas', 'fa-skype', 'fa-slack', 'fa-sliders', 'fa-slideshare', 'fa-smile-o', 'fa-snapchat', 'fa-snapchat-ghost', 'fa-snapchat-square', 'fa-snowflake-o', 'fa-sort', 'fa-sort-alpha-asc', 'fa-sort-alpha-desc', 'fa-sort-amount-asc', 'fa-sort-amount-desc', 'fa-sort-asc', 'fa-sort-desc', 'fa-sort-numeric-asc', 'fa-sort-numeric-desc', 'fa-soundcloud', 'fa-space-shuttle', 'fa-spinner', 'fa-spoon', 'fa-spotify', 'fa-square', 'fa-square-o', 'fa-stack-exchange', 'fa-stack-overflow', 'fa-star', 'fa-star-half', 'fa-star-half-o', 'fa-star-o', 'fa-steam', 'fa-steam-square', 'fa-step-backward', 'fa-step-forward', 'fa-stethoscope', 'fa-sticky-note', 'fa-sticky-note-o', 'fa-stop', 'fa-stop-circle', 'fa-stop-circle-o', 'fa-street-view', 'fa-strikethrough', 'fa-stumbleupon', 'fa-stumbleupon-circle', 'fa-subscript', 'fa-subway', 'fa-suitcase', 'fa-sun-o', 'fa-superpowers', 'fa-superscript', 'fa-table', 'fa-tablet', 'fa-tachometer', 'fa-tag', 'fa-tags', 'fa-tasks', 'fa-taxi', 'fa-telegram', 'fa-television', 'fa-tencent-weibo', 'fa-terminal', 'fa-text-height', 'fa-text-width', 'fa-th', 'fa-th-large', 'fa-th-list', 'fa-themeisle', 'fa-thermometer-empty', 'fa-thermometer-full', 'fa-thermometer-half', 'fa-thermometer-quarter', 'fa-thermometer-three-quarters', 'fa-thumb-tack', 'fa-thumbs-down', 'fa-thumbs-o-down', 'fa-thumbs-o-up', 'fa-thumbs-up', 'fa-ticket', 'fa-times', 'fa-times-circle', 'fa-times-circle-o', 'fa-tint', 'fa-toggle-off', 'fa-toggle-on', 'fa-trademark', 'fa-train', 'fa-transgender', 'fa-transgender-alt', 'fa-trash', 'fa-trash-o', 'fa-tree', 'fa-trello', 'fa-tripadvisor', 'fa-trophy', 'fa-truck', 'fa-try', 'fa-tty', 'fa-tumblr', 'fa-tumblr-square', 'fa-twitch', 'fa-twitter', 'fa-twitter-square', 'fa-umbrella', 'fa-underline', 'fa-undo', 'fa-universal-access', 'fa-university', 'fa-unlock', 'fa-unlock-alt', 'fa-upload', 'fa-usb', 'fa-usd', 'fa-user', 'fa-user-circle', 'fa-user-circle-o', 'fa-user-md', 'fa-user-o', 'fa-user-plus', 'fa-user-secret', 'fa-user-times', 'fa-users', 'fa-venus', 'fa-venus-double', 'fa-venus-mars', 'fa-viacoin', 'fa-viadeo', 'fa-viadeo-square', 'fa-video-camera', 'fa-vimeo', 'fa-vimeo-square', 'fa-vine', 'fa-vk', 'fa-volume-control-phone', 'fa-volume-down', 'fa-volume-off', 'fa-volume-up', 'fa-weibo', 'fa-weixin', 'fa-whatsapp', 'fa-wheelchair', 'fa-wheelchair-alt', 'fa-wifi', 'fa-wikipedia-w', 'fa-window-close', 'fa-window-close-o', 'fa-window-maximize', 'fa-window-minimize', 'fa-window-restore', 'fa-windows', 'fa-wordpress', 'fa-wpbeginner', 'fa-wpexplorer', 'fa-wpforms', 'fa-wrench', 'fa-xing', 'fa-xing-square', 'fa-y-combinator', 'fa-yahoo', 'fa-yelp', 'fa-yoast', 'fa-youtube', 'fa-youtube-play', 'fa-youtube-square']
},
{
  'type': 'iconmoon',
  'names': ['icon-home', 'icon-home2', 'icon-home3', 'icon-office', 'icon-newspaper', 'icon-pencil', 'icon-pencil2', 'icon-quill', 'icon-pen', 'icon-blog', 'icon-eyedropper', 'icon-droplet', 'icon-paint-format', 'icon-image', 'icon-images', 'icon-camera', 'icon-headphones', 'icon-music', 'icon-play', 'icon-film', 'icon-video-camera', 'icon-dice', 'icon-pacman', 'icon-spades', 'icon-clubs', 'icon-diamonds', 'icon-bullhorn', 'icon-connection', 'icon-podcast', 'icon-feed', 'icon-mic', 'icon-book', 'icon-books', 'icon-library', 'icon-file-text', 'icon-profile', 'icon-file-empty', 'icon-files-empty', 'icon-file-text2', 'icon-file-picture', 'icon-file-music', 'icon-file-play', 'icon-file-video', 'icon-file-zip', 'icon-copy', 'icon-paste', 'icon-stack', 'icon-folder', 'icon-folder-open', 'icon-folder-plus', 'icon-folder-minus', 'icon-folder-download', 'icon-folder-upload', 'icon-price-tag', 'icon-price-tags', 'icon-barcode', 'icon-qrcode', 'icon-ticket', 'icon-cart', 'icon-coin-dollar', 'icon-coin-euro', 'icon-coin-pound', 'icon-coin-yen', 'icon-credit-card', 'icon-calculator', 'icon-lifebuoy', 'icon-phone', 'icon-phone-hang-up', 'icon-address-book', 'icon-envelop', 'icon-pushpin', 'icon-location', 'icon-location2', 'icon-compass', 'icon-compass2', 'icon-map', 'icon-map2', 'icon-history', 'icon-clock', 'icon-clock2', 'icon-alarm', 'icon-bell', 'icon-stopwatch', 'icon-calendar', 'icon-printer', 'icon-keyboard', 'icon-display', 'icon-laptop', 'icon-mobile', 'icon-mobile2', 'icon-tablet', 'icon-tv', 'icon-drawer', 'icon-drawer2', 'icon-box-add', 'icon-box-remove', 'icon-download', 'icon-upload', 'icon-floppy-disk', 'icon-drive', 'icon-database', 'icon-undo', 'icon-redo', 'icon-undo2', 'icon-redo2', 'icon-forward', 'icon-reply', 'icon-bubble', 'icon-bubbles', 'icon-bubbles2', 'icon-bubble2', 'icon-bubbles3', 'icon-bubbles4', 'icon-user', 'icon-users', 'icon-user-plus', 'icon-user-minus', 'icon-user-check', 'icon-user-tie', 'icon-quotes-left', 'icon-quotes-right', 'icon-hour-glass', 'icon-spinner', 'icon-spinner2', 'icon-spinner3', 'icon-spinner4', 'icon-spinner5', 'icon-spinner6', 'icon-spinner7', 'icon-spinner8', 'icon-spinner9', 'icon-spinner10', 'icon-spinner11', 'icon-binoculars', 'icon-search', 'icon-zoom-in', 'icon-zoom-out', 'icon-enlarge', 'icon-shrink', 'icon-enlarge2', 'icon-shrink2', 'icon-key', 'icon-key2', 'icon-lock', 'icon-unlocked', 'icon-wrench', 'icon-equalizer', 'icon-equalizer2', 'icon-cog', 'icon-cogs', 'icon-hammer', 'icon-magic-wand', 'icon-aid-kit', 'icon-bug', 'icon-pie-chart', 'icon-stats-dots', 'icon-stats-bars', 'icon-stats-bars2', 'icon-trophy', 'icon-gift', 'icon-glass', 'icon-glass2', 'icon-mug', 'icon-spoon-knife', 'icon-leaf', 'icon-rocket', 'icon-meter', 'icon-meter2', 'icon-hammer2', 'icon-fire', 'icon-lab', 'icon-magnet', 'icon-bin', 'icon-bin2', 'icon-briefcase', 'icon-airplane', 'icon-truck', 'icon-road', 'icon-accessibility', 'icon-target', 'icon-shield', 'icon-power', 'icon-switch', 'icon-power-cord', 'icon-clipboard', 'icon-list-numbered', 'icon-list', 'icon-list2', 'icon-tree', 'icon-menu', 'icon-menu2', 'icon-menu3', 'icon-menu4', 'icon-cloud', 'icon-cloud-download', 'icon-cloud-upload', 'icon-cloud-check', 'icon-download2', 'icon-upload2', 'icon-download3', 'icon-upload3', 'icon-sphere', 'icon-earth', 'icon-link', 'icon-flag', 'icon-attachment', 'icon-eye', 'icon-eye-plus', 'icon-eye-minus', 'icon-eye-blocked', 'icon-bookmark', 'icon-bookmarks', 'icon-sun', 'icon-contrast', 'icon-brightness-contrast', 'icon-star-empty', 'icon-star-half', 'icon-star-full', 'icon-heart', 'icon-heart-broken', 'icon-man', 'icon-woman', 'icon-man-woman', 'icon-happy', 'icon-happy2', 'icon-smile', 'icon-smile2', 'icon-tongue', 'icon-tongue2', 'icon-sad', 'icon-sad2', 'icon-wink', 'icon-wink2', 'icon-grin', 'icon-grin2', 'icon-cool', 'icon-cool2', 'icon-angry', 'icon-angry2', 'icon-evil', 'icon-evil2', 'icon-shocked', 'icon-shocked2', 'icon-baffled', 'icon-baffled2', 'icon-confused', 'icon-confused2', 'icon-neutral', 'icon-neutral2', 'icon-hipster', 'icon-hipster2', 'icon-wondering', 'icon-wondering2', 'icon-sleepy', 'icon-sleepy2', 'icon-frustrated', 'icon-frustrated2', 'icon-crying', 'icon-crying2', 'icon-point-up', 'icon-point-right', 'icon-point-down', 'icon-point-left', 'icon-warning', 'icon-notification', 'icon-question', 'icon-plus', 'icon-minus', 'icon-info', 'icon-cancel-circle', 'icon-blocked', 'icon-cross', 'icon-checkmark', 'icon-checkmark2', 'icon-spell-check', 'icon-enter', 'icon-exit', 'icon-play2', 'icon-pause', 'icon-stop', 'icon-previous', 'icon-next', 'icon-backward', 'icon-forward2', 'icon-play3', 'icon-pause2', 'icon-stop2', 'icon-backward2', 'icon-forward3', 'icon-first', 'icon-last', 'icon-previous2', 'icon-next2', 'icon-eject', 'icon-volume-high', 'icon-volume-medium', 'icon-volume-low', 'icon-volume-mute', 'icon-volume-mute2', 'icon-volume-increase', 'icon-volume-decrease', 'icon-loop', 'icon-loop2', 'icon-infinite', 'icon-shuffle', 'icon-arrow-up-left', 'icon-arrow-up', 'icon-arrow-up-right', 'icon-arrow-right', 'icon-arrow-down-right', 'icon-arrow-down', 'icon-arrow-down-left', 'icon-arrow-left', 'icon-arrow-up-left2', 'icon-arrow-up2', 'icon-arrow-up-right2', 'icon-arrow-right2', 'icon-arrow-down-right2', 'icon-arrow-down2', 'icon-arrow-down-left2', 'icon-arrow-left2', 'icon-circle-up', 'icon-circle-right', 'icon-circle-down', 'icon-circle-left', 'icon-tab', 'icon-move-up', 'icon-move-down', 'icon-sort-alpha-asc', 'icon-sort-alpha-desc', 'icon-sort-numeric-asc', 'icon-sort-numberic-desc', 'icon-sort-amount-asc', 'icon-sort-amount-desc', 'icon-command', 'icon-shift', 'icon-ctrl', 'icon-opt', 'icon-checkbox-checked', 'icon-checkbox-unchecked', 'icon-radio-checked', 'icon-radio-checked2', 'icon-radio-unchecked', 'icon-crop', 'icon-make-group', 'icon-ungroup', 'icon-scissors', 'icon-filter', 'icon-font', 'icon-ligature', 'icon-ligature2', 'icon-text-height', 'icon-text-width', 'icon-font-size', 'icon-bold', 'icon-underline', 'icon-italic', 'icon-strikethrough', 'icon-omega', 'icon-sigma', 'icon-page-break', 'icon-superscript', 'icon-subscript', 'icon-superscript2', 'icon-subscript2', 'icon-text-color', 'icon-pagebreak', 'icon-clear-formatting', 'icon-table', 'icon-table2', 'icon-insert-template', 'icon-pilcrow', 'icon-ltr', 'icon-rtl', 'icon-section', 'icon-paragraph-left', 'icon-paragraph-center', 'icon-paragraph-right', 'icon-paragraph-justify', 'icon-indent-increase', 'icon-indent-decrease', 'icon-share', 'icon-new-tab', 'icon-embed', 'icon-embed2', 'icon-terminal', 'icon-share2', 'icon-mail', 'icon-mail2', 'icon-mail3', 'icon-mail4', 'icon-amazon', 'icon-google', 'icon-google2', 'icon-google3', 'icon-google-plus', 'icon-google-plus2', 'icon-google-plus3', 'icon-hangouts', 'icon-google-drive', 'icon-facebook', 'icon-facebook2', 'icon-instagram', 'icon-whatsapp', 'icon-spotify', 'icon-telegram', 'icon-twitter', 'icon-vine', 'icon-vk', 'icon-renren', 'icon-sina-weibo', 'icon-rss', 'icon-rss2', 'icon-youtube', 'icon-youtube2', 'icon-twitch', 'icon-vimeo', 'icon-vimeo2', 'icon-lanyrd', 'icon-flickr', 'icon-flickr2', 'icon-flickr3', 'icon-flickr4', 'icon-dribbble', 'icon-behance', 'icon-behance2', 'icon-deviantart', 'icon-500px', 'icon-steam', 'icon-steam2', 'icon-dropbox', 'icon-onedrive', 'icon-github', 'icon-npm', 'icon-basecamp', 'icon-trello', 'icon-wordpress', 'icon-joomla', 'icon-ello', 'icon-blogger', 'icon-blogger2', 'icon-tumblr', 'icon-tumblr2', 'icon-yahoo', 'icon-yahoo2', 'icon-tux', 'icon-appleinc', 'icon-finder', 'icon-android', 'icon-windows', 'icon-windows8', 'icon-soundcloud', 'icon-soundcloud2', 'icon-skype', 'icon-reddit', 'icon-hackernews', 'icon-wikipedia', 'icon-linkedin', 'icon-linkedin2', 'icon-lastfm', 'icon-lastfm2', 'icon-delicious', 'icon-stumbleupon', 'icon-stumbleupon2', 'icon-stackoverflow', 'icon-pinterest', 'icon-pinterest2', 'icon-xing', 'icon-xing2', 'icon-flattr', 'icon-foursquare', 'icon-yelp', 'icon-paypal', 'icon-chrome', 'icon-firefox', 'icon-IE', 'icon-edge', 'icon-safari', 'icon-opera', 'icon-file-pdf', 'icon-file-openoffice', 'icon-file-word', 'icon-file-excel', 'icon-libreoffice', 'icon-html-five', 'icon-html-five2', 'icon-css3', 'icon-git', 'icon-codepen', 'icon-svg', 'icon-IcoMoon']
}]