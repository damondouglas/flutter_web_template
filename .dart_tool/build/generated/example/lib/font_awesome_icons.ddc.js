define(['dart_sdk', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__icon_data = animation.src__widgets__icon_data;
  const font_awesome_icons = Object.create(dart.library);
  font_awesome_icons.FontAwesome = class FontAwesome extends core.Object {};
  (font_awesome_icons.FontAwesome.__ = function() {
    ;
  }).prototype = font_awesome_icons.FontAwesome.prototype;
  dart.addTypeTests(font_awesome_icons.FontAwesome);
  dart.setLibraryUri(font_awesome_icons.FontAwesome, "package:example/font_awesome_icons.dart");
  dart.defineLazy(font_awesome_icons.FontAwesome, {
    /*font_awesome_icons.FontAwesome._kFontFam*/get _kFontFam() {
      return "FontAwesome";
    },
    /*font_awesome_icons.FontAwesome.glass*/get glass() {
      return dart.const(new src__widgets__icon_data.IconData.new(59392, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.music*/get music() {
      return dart.const(new src__widgets__icon_data.IconData.new(59393, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.search*/get search() {
      return dart.const(new src__widgets__icon_data.IconData.new(59394, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mail*/get mail() {
      return dart.const(new src__widgets__icon_data.IconData.new(59395, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.heart*/get heart() {
      return dart.const(new src__widgets__icon_data.IconData.new(59396, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.heart_empty*/get heart_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(59397, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.star*/get star() {
      return dart.const(new src__widgets__icon_data.IconData.new(59398, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.download*/get download() {
      return dart.const(new src__widgets__icon_data.IconData.new(59399, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.star_empty*/get star_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(59400, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.star_half*/get star_half() {
      return dart.const(new src__widgets__icon_data.IconData.new(59401, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.user*/get user() {
      return dart.const(new src__widgets__icon_data.IconData.new(59402, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.users*/get users() {
      return dart.const(new src__widgets__icon_data.IconData.new(59403, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.lemon*/get lemon() {
      return dart.const(new src__widgets__icon_data.IconData.new(59404, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.minus*/get minus() {
      return dart.const(new src__widgets__icon_data.IconData.new(59405, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.plus_circled*/get plus_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(59406, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.plus*/get plus() {
      return dart.const(new src__widgets__icon_data.IconData.new(59407, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cancel_circled2*/get cancel_circled2() {
      return dart.const(new src__widgets__icon_data.IconData.new(59408, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cancel_circled*/get cancel_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(59409, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cancel*/get cancel() {
      return dart.const(new src__widgets__icon_data.IconData.new(59410, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ok_circled2*/get ok_circled2() {
      return dart.const(new src__widgets__icon_data.IconData.new(59411, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ok_circled*/get ok_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(59412, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ok*/get ok() {
      return dart.const(new src__widgets__icon_data.IconData.new(59413, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.th_list*/get th_list() {
      return dart.const(new src__widgets__icon_data.IconData.new(59414, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.th*/get th() {
      return dart.const(new src__widgets__icon_data.IconData.new(59415, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.th_large*/get th_large() {
      return dart.const(new src__widgets__icon_data.IconData.new(59416, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.camera_alt*/get camera_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(59417, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.camera*/get camera() {
      return dart.const(new src__widgets__icon_data.IconData.new(59418, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.picture*/get picture() {
      return dart.const(new src__widgets__icon_data.IconData.new(59419, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.videocam*/get videocam() {
      return dart.const(new src__widgets__icon_data.IconData.new(59420, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.video*/get video() {
      return dart.const(new src__widgets__icon_data.IconData.new(59421, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.minus_circled*/get minus_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(59422, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.help_circled*/get help_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(59423, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.info_circled*/get info_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(59424, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.home*/get home() {
      return dart.const(new src__widgets__icon_data.IconData.new(59425, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.link*/get link() {
      return dart.const(new src__widgets__icon_data.IconData.new(59426, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.attach*/get attach() {
      return dart.const(new src__widgets__icon_data.IconData.new(59427, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.lock*/get lock() {
      return dart.const(new src__widgets__icon_data.IconData.new(59428, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.lock_open*/get lock_open() {
      return dart.const(new src__widgets__icon_data.IconData.new(59429, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pin*/get pin() {
      return dart.const(new src__widgets__icon_data.IconData.new(59430, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.eye*/get eye() {
      return dart.const(new src__widgets__icon_data.IconData.new(59431, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.eye_off*/get eye_off() {
      return dart.const(new src__widgets__icon_data.IconData.new(59432, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tag*/get tag() {
      return dart.const(new src__widgets__icon_data.IconData.new(59433, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.forward*/get forward() {
      return dart.const(new src__widgets__icon_data.IconData.new(59434, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.upload*/get upload() {
      return dart.const(new src__widgets__icon_data.IconData.new(59435, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.thumbs_down*/get thumbs_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(59436, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.thumbs_up*/get thumbs_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(59437, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.flag*/get flag() {
      return dart.const(new src__widgets__icon_data.IconData.new(59438, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bookmark*/get bookmark() {
      return dart.const(new src__widgets__icon_data.IconData.new(59439, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tags*/get tags() {
      return dart.const(new src__widgets__icon_data.IconData.new(59440, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.export_icon*/get export_icon() {
      return dart.const(new src__widgets__icon_data.IconData.new(59441, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pencil*/get pencil() {
      return dart.const(new src__widgets__icon_data.IconData.new(59442, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.edit*/get edit() {
      return dart.const(new src__widgets__icon_data.IconData.new(59443, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.print*/get print() {
      return dart.const(new src__widgets__icon_data.IconData.new(59444, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.retweet*/get retweet() {
      return dart.const(new src__widgets__icon_data.IconData.new(59445, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.comment*/get comment() {
      return dart.const(new src__widgets__icon_data.IconData.new(59446, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.chat*/get chat() {
      return dart.const(new src__widgets__icon_data.IconData.new(59447, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bell*/get bell() {
      return dart.const(new src__widgets__icon_data.IconData.new(59448, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.doc*/get doc() {
      return dart.const(new src__widgets__icon_data.IconData.new(59449, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.trash_empty*/get trash_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(59450, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.location*/get location() {
      return dart.const(new src__widgets__icon_data.IconData.new(59451, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.attention_circled*/get attention_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(59452, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.attention*/get attention() {
      return dart.const(new src__widgets__icon_data.IconData.new(59453, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.folder*/get folder() {
      return dart.const(new src__widgets__icon_data.IconData.new(59454, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.folder_open*/get folder_open() {
      return dart.const(new src__widgets__icon_data.IconData.new(59455, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.phone*/get phone() {
      return dart.const(new src__widgets__icon_data.IconData.new(59456, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cog*/get cog() {
      return dart.const(new src__widgets__icon_data.IconData.new(59457, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cog_alt*/get cog_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(59458, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wrench*/get wrench() {
      return dart.const(new src__widgets__icon_data.IconData.new(59459, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.basket*/get basket() {
      return dart.const(new src__widgets__icon_data.IconData.new(59460, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.calendar*/get calendar() {
      return dart.const(new src__widgets__icon_data.IconData.new(59461, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.zoom_out*/get zoom_out() {
      return dart.const(new src__widgets__icon_data.IconData.new(59462, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.zoom_in*/get zoom_in() {
      return dart.const(new src__widgets__icon_data.IconData.new(59463, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.resize_horizontal*/get resize_horizontal() {
      return dart.const(new src__widgets__icon_data.IconData.new(59464, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.resize_vertical*/get resize_vertical() {
      return dart.const(new src__widgets__icon_data.IconData.new(59465, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.resize_small*/get resize_small() {
      return dart.const(new src__widgets__icon_data.IconData.new(59466, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.resize_full*/get resize_full() {
      return dart.const(new src__widgets__icon_data.IconData.new(59467, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.block*/get block() {
      return dart.const(new src__widgets__icon_data.IconData.new(59468, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.clock*/get clock() {
      return dart.const(new src__widgets__icon_data.IconData.new(59469, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.volume_down*/get volume_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(59470, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.volume_up*/get volume_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(59471, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.headphones*/get headphones() {
      return dart.const(new src__widgets__icon_data.IconData.new(59472, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.volume_off*/get volume_off() {
      return dart.const(new src__widgets__icon_data.IconData.new(59473, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.logout*/get logout() {
      return dart.const(new src__widgets__icon_data.IconData.new(59474, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.login*/get login() {
      return dart.const(new src__widgets__icon_data.IconData.new(59475, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.down_circled2*/get down_circled2() {
      return dart.const(new src__widgets__icon_data.IconData.new(59476, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.up_circled2*/get up_circled2() {
      return dart.const(new src__widgets__icon_data.IconData.new(59477, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.down_dir*/get down_dir() {
      return dart.const(new src__widgets__icon_data.IconData.new(59478, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.up_dir*/get up_dir() {
      return dart.const(new src__widgets__icon_data.IconData.new(59479, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.left_dir*/get left_dir() {
      return dart.const(new src__widgets__icon_data.IconData.new(59480, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.right_dir*/get right_dir() {
      return dart.const(new src__widgets__icon_data.IconData.new(59481, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.down_open*/get down_open() {
      return dart.const(new src__widgets__icon_data.IconData.new(59482, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.left_open*/get left_open() {
      return dart.const(new src__widgets__icon_data.IconData.new(59483, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.right_open*/get right_open() {
      return dart.const(new src__widgets__icon_data.IconData.new(59484, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.up_open*/get up_open() {
      return dart.const(new src__widgets__icon_data.IconData.new(59485, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cw*/get cw() {
      return dart.const(new src__widgets__icon_data.IconData.new(59486, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.to_start_alt*/get to_start_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(59487, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.fast_fw*/get fast_fw() {
      return dart.const(new src__widgets__icon_data.IconData.new(59488, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ccw*/get ccw() {
      return dart.const(new src__widgets__icon_data.IconData.new(59489, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.fast_bw*/get fast_bw() {
      return dart.const(new src__widgets__icon_data.IconData.new(59490, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.arrows_cw*/get arrows_cw() {
      return dart.const(new src__widgets__icon_data.IconData.new(59491, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.eject*/get eject() {
      return dart.const(new src__widgets__icon_data.IconData.new(59492, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.target*/get target() {
      return dart.const(new src__widgets__icon_data.IconData.new(59493, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.leaf*/get leaf() {
      return dart.const(new src__widgets__icon_data.IconData.new(59494, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.shuffle*/get shuffle() {
      return dart.const(new src__widgets__icon_data.IconData.new(59495, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.signal*/get signal() {
      return dart.const(new src__widgets__icon_data.IconData.new(59496, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.font*/get font() {
      return dart.const(new src__widgets__icon_data.IconData.new(59497, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bold*/get bold() {
      return dart.const(new src__widgets__icon_data.IconData.new(59498, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.award*/get award() {
      return dart.const(new src__widgets__icon_data.IconData.new(59499, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.down_big*/get down_big() {
      return dart.const(new src__widgets__icon_data.IconData.new(59500, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.italic*/get italic() {
      return dart.const(new src__widgets__icon_data.IconData.new(59501, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.left_big*/get left_big() {
      return dart.const(new src__widgets__icon_data.IconData.new(59502, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.scissors*/get scissors() {
      return dart.const(new src__widgets__icon_data.IconData.new(59503, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.right_big*/get right_big() {
      return dart.const(new src__widgets__icon_data.IconData.new(59504, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.up_big*/get up_big() {
      return dart.const(new src__widgets__icon_data.IconData.new(59505, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.text_height*/get text_height() {
      return dart.const(new src__widgets__icon_data.IconData.new(59506, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.briefcase*/get briefcase() {
      return dart.const(new src__widgets__icon_data.IconData.new(59507, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.right_hand*/get right_hand() {
      return dart.const(new src__widgets__icon_data.IconData.new(59508, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.play*/get play() {
      return dart.const(new src__widgets__icon_data.IconData.new(59509, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.inbox*/get inbox() {
      return dart.const(new src__widgets__icon_data.IconData.new(59510, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.text_width*/get text_width() {
      return dart.const(new src__widgets__icon_data.IconData.new(59511, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.left_hand*/get left_hand() {
      return dart.const(new src__widgets__icon_data.IconData.new(59512, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.globe*/get globe() {
      return dart.const(new src__widgets__icon_data.IconData.new(59513, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.align_left*/get align_left() {
      return dart.const(new src__widgets__icon_data.IconData.new(59514, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.up_hand*/get up_hand() {
      return dart.const(new src__widgets__icon_data.IconData.new(59515, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.play_circled2*/get play_circled2() {
      return dart.const(new src__widgets__icon_data.IconData.new(59516, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.align_center*/get align_center() {
      return dart.const(new src__widgets__icon_data.IconData.new(59517, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.down_hand*/get down_hand() {
      return dart.const(new src__widgets__icon_data.IconData.new(59518, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.stop*/get stop() {
      return dart.const(new src__widgets__icon_data.IconData.new(59519, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cloud*/get cloud() {
      return dart.const(new src__widgets__icon_data.IconData.new(59520, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.align_right*/get align_right() {
      return dart.const(new src__widgets__icon_data.IconData.new(59521, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.off*/get off() {
      return dart.const(new src__widgets__icon_data.IconData.new(59522, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pause*/get pause() {
      return dart.const(new src__widgets__icon_data.IconData.new(59523, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.flash*/get flash() {
      return dart.const(new src__widgets__icon_data.IconData.new(59524, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.align_justify*/get align_justify() {
      return dart.const(new src__widgets__icon_data.IconData.new(59525, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.road*/get road() {
      return dart.const(new src__widgets__icon_data.IconData.new(59526, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.to_end*/get to_end() {
      return dart.const(new src__widgets__icon_data.IconData.new(59527, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.list*/get list() {
      return dart.const(new src__widgets__icon_data.IconData.new(59528, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.list_alt*/get list_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(59529, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.to_end_alt*/get to_end_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(59530, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.umbrella*/get umbrella() {
      return dart.const(new src__widgets__icon_data.IconData.new(59531, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.indent_left*/get indent_left() {
      return dart.const(new src__widgets__icon_data.IconData.new(59532, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.qrcode*/get qrcode() {
      return dart.const(new src__widgets__icon_data.IconData.new(59533, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.to_start*/get to_start() {
      return dart.const(new src__widgets__icon_data.IconData.new(59534, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.flight*/get flight() {
      return dart.const(new src__widgets__icon_data.IconData.new(59535, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.indent_right*/get indent_right() {
      return dart.const(new src__widgets__icon_data.IconData.new(59536, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.barcode*/get barcode() {
      return dart.const(new src__widgets__icon_data.IconData.new(59537, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.book*/get book() {
      return dart.const(new src__widgets__icon_data.IconData.new(59538, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.adjust*/get adjust() {
      return dart.const(new src__widgets__icon_data.IconData.new(59539, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.credit_card*/get credit_card() {
      return dart.const(new src__widgets__icon_data.IconData.new(59540, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tint*/get tint() {
      return dart.const(new src__widgets__icon_data.IconData.new(59541, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.floppy*/get floppy() {
      return dart.const(new src__widgets__icon_data.IconData.new(59542, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.megaphone*/get megaphone() {
      return dart.const(new src__widgets__icon_data.IconData.new(59543, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hammer*/get hammer() {
      return dart.const(new src__widgets__icon_data.IconData.new(59544, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.check*/get check() {
      return dart.const(new src__widgets__icon_data.IconData.new(59545, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.key*/get key() {
      return dart.const(new src__widgets__icon_data.IconData.new(59546, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.asterisk*/get asterisk() {
      return dart.const(new src__widgets__icon_data.IconData.new(59547, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gift*/get gift() {
      return dart.const(new src__widgets__icon_data.IconData.new(59548, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.fire*/get fire() {
      return dart.const(new src__widgets__icon_data.IconData.new(59549, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.magnet*/get magnet() {
      return dart.const(new src__widgets__icon_data.IconData.new(59550, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.chart_bar*/get chart_bar() {
      return dart.const(new src__widgets__icon_data.IconData.new(59551, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.truck*/get truck() {
      return dart.const(new src__widgets__icon_data.IconData.new(59552, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.move*/get move() {
      return dart.const(new src__widgets__icon_data.IconData.new(61511, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.link_ext*/get link_ext() {
      return dart.const(new src__widgets__icon_data.IconData.new(61582, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.check_empty*/get check_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61590, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bookmark_empty*/get bookmark_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61591, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.phone_squared*/get phone_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61592, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.twitter*/get twitter() {
      return dart.const(new src__widgets__icon_data.IconData.new(61593, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.facebook*/get facebook() {
      return dart.const(new src__widgets__icon_data.IconData.new(61594, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.github_circled*/get github_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61595, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.rss*/get rss() {
      return dart.const(new src__widgets__icon_data.IconData.new(61598, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hdd*/get hdd() {
      return dart.const(new src__widgets__icon_data.IconData.new(61600, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.certificate*/get certificate() {
      return dart.const(new src__widgets__icon_data.IconData.new(61603, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.left_circled*/get left_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61608, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.right_circled*/get right_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61609, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.up_circled*/get up_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61610, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.down_circled*/get down_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61611, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tasks*/get tasks() {
      return dart.const(new src__widgets__icon_data.IconData.new(61614, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.filter*/get filter() {
      return dart.const(new src__widgets__icon_data.IconData.new(61616, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.resize_full_alt*/get resize_full_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61618, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.beaker*/get beaker() {
      return dart.const(new src__widgets__icon_data.IconData.new(61635, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.docs*/get docs() {
      return dart.const(new src__widgets__icon_data.IconData.new(61637, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.blank*/get blank() {
      return dart.const(new src__widgets__icon_data.IconData.new(61640, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.menu*/get menu() {
      return dart.const(new src__widgets__icon_data.IconData.new(61641, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.list_bullet*/get list_bullet() {
      return dart.const(new src__widgets__icon_data.IconData.new(61642, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.list_numbered*/get list_numbered() {
      return dart.const(new src__widgets__icon_data.IconData.new(61643, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.strike*/get strike() {
      return dart.const(new src__widgets__icon_data.IconData.new(61644, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.underline*/get underline() {
      return dart.const(new src__widgets__icon_data.IconData.new(61645, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.table*/get table() {
      return dart.const(new src__widgets__icon_data.IconData.new(61646, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.magic*/get magic() {
      return dart.const(new src__widgets__icon_data.IconData.new(61648, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pinterest_circled*/get pinterest_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61650, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pinterest_squared*/get pinterest_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61651, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gplus_squared*/get gplus_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61652, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gplus*/get gplus() {
      return dart.const(new src__widgets__icon_data.IconData.new(61653, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.money*/get money() {
      return dart.const(new src__widgets__icon_data.IconData.new(61654, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.columns*/get columns() {
      return dart.const(new src__widgets__icon_data.IconData.new(61659, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort*/get sort() {
      return dart.const(new src__widgets__icon_data.IconData.new(61660, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort_down*/get sort_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61661, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort_up*/get sort_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61662, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mail_alt*/get mail_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61664, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.linkedin*/get linkedin() {
      return dart.const(new src__widgets__icon_data.IconData.new(61665, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gauge*/get gauge() {
      return dart.const(new src__widgets__icon_data.IconData.new(61668, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.comment_empty*/get comment_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61669, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.chat_empty*/get chat_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61670, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sitemap*/get sitemap() {
      return dart.const(new src__widgets__icon_data.IconData.new(61672, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.paste*/get paste() {
      return dart.const(new src__widgets__icon_data.IconData.new(61674, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.lightbulb*/get lightbulb() {
      return dart.const(new src__widgets__icon_data.IconData.new(61675, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.exchange*/get exchange() {
      return dart.const(new src__widgets__icon_data.IconData.new(61676, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.download_cloud*/get download_cloud() {
      return dart.const(new src__widgets__icon_data.IconData.new(61677, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.upload_cloud*/get upload_cloud() {
      return dart.const(new src__widgets__icon_data.IconData.new(61678, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.user_md*/get user_md() {
      return dart.const(new src__widgets__icon_data.IconData.new(61680, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.stethoscope*/get stethoscope() {
      return dart.const(new src__widgets__icon_data.IconData.new(61681, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.suitcase*/get suitcase() {
      return dart.const(new src__widgets__icon_data.IconData.new(61682, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bell_alt*/get bell_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61683, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.coffee*/get coffee() {
      return dart.const(new src__widgets__icon_data.IconData.new(61684, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.food*/get food() {
      return dart.const(new src__widgets__icon_data.IconData.new(61685, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.doc_text*/get doc_text() {
      return dart.const(new src__widgets__icon_data.IconData.new(61686, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.building*/get building() {
      return dart.const(new src__widgets__icon_data.IconData.new(61687, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hospital*/get hospital() {
      return dart.const(new src__widgets__icon_data.IconData.new(61688, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ambulance*/get ambulance() {
      return dart.const(new src__widgets__icon_data.IconData.new(61689, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.medkit*/get medkit() {
      return dart.const(new src__widgets__icon_data.IconData.new(61690, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.fighter_jet*/get fighter_jet() {
      return dart.const(new src__widgets__icon_data.IconData.new(61691, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.beer*/get beer() {
      return dart.const(new src__widgets__icon_data.IconData.new(61692, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.h_sigh*/get h_sigh() {
      return dart.const(new src__widgets__icon_data.IconData.new(61693, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.plus_squared*/get plus_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61694, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_double_left*/get angle_double_left() {
      return dart.const(new src__widgets__icon_data.IconData.new(61696, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_double_right*/get angle_double_right() {
      return dart.const(new src__widgets__icon_data.IconData.new(61697, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_double_up*/get angle_double_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61698, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_double_down*/get angle_double_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61699, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_left*/get angle_left() {
      return dart.const(new src__widgets__icon_data.IconData.new(61700, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_right*/get angle_right() {
      return dart.const(new src__widgets__icon_data.IconData.new(61701, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_up*/get angle_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61702, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_down*/get angle_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61703, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.desktop*/get desktop() {
      return dart.const(new src__widgets__icon_data.IconData.new(61704, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.laptop*/get laptop() {
      return dart.const(new src__widgets__icon_data.IconData.new(61705, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tablet*/get tablet() {
      return dart.const(new src__widgets__icon_data.IconData.new(61706, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mobile*/get mobile() {
      return dart.const(new src__widgets__icon_data.IconData.new(61707, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.circle_empty*/get circle_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61708, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.quote_left*/get quote_left() {
      return dart.const(new src__widgets__icon_data.IconData.new(61709, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.quote_right*/get quote_right() {
      return dart.const(new src__widgets__icon_data.IconData.new(61710, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.spinner*/get spinner() {
      return dart.const(new src__widgets__icon_data.IconData.new(61712, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.circle*/get circle() {
      return dart.const(new src__widgets__icon_data.IconData.new(61713, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.reply*/get reply() {
      return dart.const(new src__widgets__icon_data.IconData.new(61714, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.github*/get github() {
      return dart.const(new src__widgets__icon_data.IconData.new(61715, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.folder_empty*/get folder_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61716, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.folder_open_empty*/get folder_open_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61717, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.smile*/get smile() {
      return dart.const(new src__widgets__icon_data.IconData.new(61720, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.frown*/get frown() {
      return dart.const(new src__widgets__icon_data.IconData.new(61721, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.meh*/get meh() {
      return dart.const(new src__widgets__icon_data.IconData.new(61722, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gamepad*/get gamepad() {
      return dart.const(new src__widgets__icon_data.IconData.new(61723, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.keyboard*/get keyboard() {
      return dart.const(new src__widgets__icon_data.IconData.new(61724, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.flag_empty*/get flag_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61725, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.flag_checkered*/get flag_checkered() {
      return dart.const(new src__widgets__icon_data.IconData.new(61726, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.terminal*/get terminal() {
      return dart.const(new src__widgets__icon_data.IconData.new(61728, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.code*/get code() {
      return dart.const(new src__widgets__icon_data.IconData.new(61729, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.reply_all*/get reply_all() {
      return dart.const(new src__widgets__icon_data.IconData.new(61730, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.star_half_alt*/get star_half_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61731, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.direction*/get direction() {
      return dart.const(new src__widgets__icon_data.IconData.new(61732, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.crop*/get crop() {
      return dart.const(new src__widgets__icon_data.IconData.new(61733, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.fork*/get fork() {
      return dart.const(new src__widgets__icon_data.IconData.new(61734, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.unlink*/get unlink() {
      return dart.const(new src__widgets__icon_data.IconData.new(61735, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.help*/get help() {
      return dart.const(new src__widgets__icon_data.IconData.new(61736, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.info*/get info() {
      return dart.const(new src__widgets__icon_data.IconData.new(61737, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.attention_alt*/get attention_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61738, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.superscript*/get superscript() {
      return dart.const(new src__widgets__icon_data.IconData.new(61739, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.subscript*/get subscript() {
      return dart.const(new src__widgets__icon_data.IconData.new(61740, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.eraser*/get eraser() {
      return dart.const(new src__widgets__icon_data.IconData.new(61741, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.puzzle*/get puzzle() {
      return dart.const(new src__widgets__icon_data.IconData.new(61742, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mic*/get mic() {
      return dart.const(new src__widgets__icon_data.IconData.new(61744, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mute*/get mute() {
      return dart.const(new src__widgets__icon_data.IconData.new(61745, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.shield*/get shield() {
      return dart.const(new src__widgets__icon_data.IconData.new(61746, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.calendar_empty*/get calendar_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61747, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.extinguisher*/get extinguisher() {
      return dart.const(new src__widgets__icon_data.IconData.new(61748, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.rocket*/get rocket() {
      return dart.const(new src__widgets__icon_data.IconData.new(61749, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.maxcdn*/get maxcdn() {
      return dart.const(new src__widgets__icon_data.IconData.new(61750, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_circled_left*/get angle_circled_left() {
      return dart.const(new src__widgets__icon_data.IconData.new(61751, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_circled_right*/get angle_circled_right() {
      return dart.const(new src__widgets__icon_data.IconData.new(61752, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_circled_up*/get angle_circled_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61753, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angle_circled_down*/get angle_circled_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61754, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.html5*/get html5() {
      return dart.const(new src__widgets__icon_data.IconData.new(61755, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.css3*/get css3() {
      return dart.const(new src__widgets__icon_data.IconData.new(61756, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.anchor*/get anchor() {
      return dart.const(new src__widgets__icon_data.IconData.new(61757, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.lock_open_alt*/get lock_open_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61758, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bullseye*/get bullseye() {
      return dart.const(new src__widgets__icon_data.IconData.new(61760, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ellipsis*/get ellipsis() {
      return dart.const(new src__widgets__icon_data.IconData.new(61761, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ellipsis_vert*/get ellipsis_vert() {
      return dart.const(new src__widgets__icon_data.IconData.new(61762, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.rss_squared*/get rss_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61763, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.play_circled*/get play_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61764, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ticket*/get ticket() {
      return dart.const(new src__widgets__icon_data.IconData.new(61765, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.minus_squared*/get minus_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61766, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.minus_squared_alt*/get minus_squared_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61767, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.level_up*/get level_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61768, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.level_down*/get level_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61769, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ok_squared*/get ok_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61770, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pencil_squared*/get pencil_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61771, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.link_ext_alt*/get link_ext_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61772, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.export_alt*/get export_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61773, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.compass*/get compass() {
      return dart.const(new src__widgets__icon_data.IconData.new(61774, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.expand*/get expand() {
      return dart.const(new src__widgets__icon_data.IconData.new(61776, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.collapse*/get collapse() {
      return dart.const(new src__widgets__icon_data.IconData.new(61777, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.expand_right*/get expand_right() {
      return dart.const(new src__widgets__icon_data.IconData.new(61778, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.euro*/get euro() {
      return dart.const(new src__widgets__icon_data.IconData.new(61779, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pound*/get pound() {
      return dart.const(new src__widgets__icon_data.IconData.new(61780, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.dollar*/get dollar() {
      return dart.const(new src__widgets__icon_data.IconData.new(61781, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.rupee*/get rupee() {
      return dart.const(new src__widgets__icon_data.IconData.new(61782, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.yen*/get yen() {
      return dart.const(new src__widgets__icon_data.IconData.new(61783, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.rouble*/get rouble() {
      return dart.const(new src__widgets__icon_data.IconData.new(61784, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.won*/get won() {
      return dart.const(new src__widgets__icon_data.IconData.new(61785, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bitcoin*/get bitcoin() {
      return dart.const(new src__widgets__icon_data.IconData.new(61786, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.doc_inv*/get doc_inv() {
      return dart.const(new src__widgets__icon_data.IconData.new(61787, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.doc_text_inv*/get doc_text_inv() {
      return dart.const(new src__widgets__icon_data.IconData.new(61788, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort_name_up*/get sort_name_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61789, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort_name_down*/get sort_name_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61790, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort_alt_up*/get sort_alt_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61792, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort_alt_down*/get sort_alt_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61793, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort_number_up*/get sort_number_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61794, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sort_number_down*/get sort_number_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61795, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.thumbs_up_alt*/get thumbs_up_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61796, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.thumbs_down_alt*/get thumbs_down_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61797, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.youtube_squared*/get youtube_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61798, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.youtube*/get youtube() {
      return dart.const(new src__widgets__icon_data.IconData.new(61799, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.xing*/get xing() {
      return dart.const(new src__widgets__icon_data.IconData.new(61800, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.xing_squared*/get xing_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61801, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.youtube_play*/get youtube_play() {
      return dart.const(new src__widgets__icon_data.IconData.new(61802, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.dropbox*/get dropbox() {
      return dart.const(new src__widgets__icon_data.IconData.new(61803, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.stackoverflow*/get stackoverflow() {
      return dart.const(new src__widgets__icon_data.IconData.new(61804, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.instagram*/get instagram() {
      return dart.const(new src__widgets__icon_data.IconData.new(61805, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.flickr*/get flickr() {
      return dart.const(new src__widgets__icon_data.IconData.new(61806, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.adn*/get adn() {
      return dart.const(new src__widgets__icon_data.IconData.new(61808, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bitbucket*/get bitbucket() {
      return dart.const(new src__widgets__icon_data.IconData.new(61809, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bitbucket_squared*/get bitbucket_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61810, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tumblr*/get tumblr() {
      return dart.const(new src__widgets__icon_data.IconData.new(61811, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tumblr_squared*/get tumblr_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61812, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.down*/get down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61813, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.up*/get up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61814, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.left*/get left() {
      return dart.const(new src__widgets__icon_data.IconData.new(61815, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.right*/get right() {
      return dart.const(new src__widgets__icon_data.IconData.new(61816, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.apple*/get apple() {
      return dart.const(new src__widgets__icon_data.IconData.new(61817, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.windows*/get windows() {
      return dart.const(new src__widgets__icon_data.IconData.new(61818, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.android*/get android() {
      return dart.const(new src__widgets__icon_data.IconData.new(61819, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.linux*/get linux() {
      return dart.const(new src__widgets__icon_data.IconData.new(61820, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.dribbble*/get dribbble() {
      return dart.const(new src__widgets__icon_data.IconData.new(61821, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.skype*/get skype() {
      return dart.const(new src__widgets__icon_data.IconData.new(61822, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.foursquare*/get foursquare() {
      return dart.const(new src__widgets__icon_data.IconData.new(61824, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.trello*/get trello() {
      return dart.const(new src__widgets__icon_data.IconData.new(61825, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.female*/get female() {
      return dart.const(new src__widgets__icon_data.IconData.new(61826, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.male*/get male() {
      return dart.const(new src__widgets__icon_data.IconData.new(61827, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gittip*/get gittip() {
      return dart.const(new src__widgets__icon_data.IconData.new(61828, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sun*/get sun() {
      return dart.const(new src__widgets__icon_data.IconData.new(61829, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.moon*/get moon() {
      return dart.const(new src__widgets__icon_data.IconData.new(61830, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.box*/get box() {
      return dart.const(new src__widgets__icon_data.IconData.new(61831, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bug*/get bug() {
      return dart.const(new src__widgets__icon_data.IconData.new(61832, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.vkontakte*/get vkontakte() {
      return dart.const(new src__widgets__icon_data.IconData.new(61833, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.weibo*/get weibo() {
      return dart.const(new src__widgets__icon_data.IconData.new(61834, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.renren*/get renren() {
      return dart.const(new src__widgets__icon_data.IconData.new(61835, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pagelines*/get pagelines() {
      return dart.const(new src__widgets__icon_data.IconData.new(61836, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.stackexchange*/get stackexchange() {
      return dart.const(new src__widgets__icon_data.IconData.new(61837, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.right_circled2*/get right_circled2() {
      return dart.const(new src__widgets__icon_data.IconData.new(61838, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.left_circled2*/get left_circled2() {
      return dart.const(new src__widgets__icon_data.IconData.new(61840, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.collapse_left*/get collapse_left() {
      return dart.const(new src__widgets__icon_data.IconData.new(61841, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.dot_circled*/get dot_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61842, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wheelchair*/get wheelchair() {
      return dart.const(new src__widgets__icon_data.IconData.new(61843, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.vimeo_squared*/get vimeo_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61844, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.try_icon*/get try_icon() {
      return dart.const(new src__widgets__icon_data.IconData.new(61845, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.plus_squared_alt*/get plus_squared_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61846, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.space_shuttle*/get space_shuttle() {
      return dart.const(new src__widgets__icon_data.IconData.new(61847, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.slack*/get slack() {
      return dart.const(new src__widgets__icon_data.IconData.new(61848, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mail_squared*/get mail_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61849, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wordpress*/get wordpress() {
      return dart.const(new src__widgets__icon_data.IconData.new(61850, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.openid*/get openid() {
      return dart.const(new src__widgets__icon_data.IconData.new(61851, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bank*/get bank() {
      return dart.const(new src__widgets__icon_data.IconData.new(61852, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.graduation_cap*/get graduation_cap() {
      return dart.const(new src__widgets__icon_data.IconData.new(61853, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.yahoo*/get yahoo() {
      return dart.const(new src__widgets__icon_data.IconData.new(61854, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.google*/get google() {
      return dart.const(new src__widgets__icon_data.IconData.new(61856, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.reddit*/get reddit() {
      return dart.const(new src__widgets__icon_data.IconData.new(61857, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.reddit_squared*/get reddit_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61858, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.stumbleupon_circled*/get stumbleupon_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61859, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.stumbleupon*/get stumbleupon() {
      return dart.const(new src__widgets__icon_data.IconData.new(61860, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.delicious*/get delicious() {
      return dart.const(new src__widgets__icon_data.IconData.new(61861, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.digg*/get digg() {
      return dart.const(new src__widgets__icon_data.IconData.new(61862, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pied_piper_squared*/get pied_piper_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61863, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pied_piper_alt*/get pied_piper_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61864, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.drupal*/get drupal() {
      return dart.const(new src__widgets__icon_data.IconData.new(61865, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.joomla*/get joomla() {
      return dart.const(new src__widgets__icon_data.IconData.new(61866, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.language*/get language() {
      return dart.const(new src__widgets__icon_data.IconData.new(61867, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.fax*/get fax() {
      return dart.const(new src__widgets__icon_data.IconData.new(61868, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.building_filled*/get building_filled() {
      return dart.const(new src__widgets__icon_data.IconData.new(61869, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.child*/get child() {
      return dart.const(new src__widgets__icon_data.IconData.new(61870, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.paw*/get paw() {
      return dart.const(new src__widgets__icon_data.IconData.new(61872, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.spoon*/get spoon() {
      return dart.const(new src__widgets__icon_data.IconData.new(61873, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cube*/get cube() {
      return dart.const(new src__widgets__icon_data.IconData.new(61874, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cubes*/get cubes() {
      return dart.const(new src__widgets__icon_data.IconData.new(61875, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.behance*/get behance() {
      return dart.const(new src__widgets__icon_data.IconData.new(61876, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.behance_squared*/get behance_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61877, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.steam*/get steam() {
      return dart.const(new src__widgets__icon_data.IconData.new(61878, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.steam_squared*/get steam_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61879, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.recycle*/get recycle() {
      return dart.const(new src__widgets__icon_data.IconData.new(61880, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cab*/get cab() {
      return dart.const(new src__widgets__icon_data.IconData.new(61881, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.taxi*/get taxi() {
      return dart.const(new src__widgets__icon_data.IconData.new(61882, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tree*/get tree() {
      return dart.const(new src__widgets__icon_data.IconData.new(61883, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.spotify*/get spotify() {
      return dart.const(new src__widgets__icon_data.IconData.new(61884, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.deviantart*/get deviantart() {
      return dart.const(new src__widgets__icon_data.IconData.new(61885, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.soundcloud*/get soundcloud() {
      return dart.const(new src__widgets__icon_data.IconData.new(61886, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.database*/get database() {
      return dart.const(new src__widgets__icon_data.IconData.new(61888, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_pdf*/get file_pdf() {
      return dart.const(new src__widgets__icon_data.IconData.new(61889, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_word*/get file_word() {
      return dart.const(new src__widgets__icon_data.IconData.new(61890, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_excel*/get file_excel() {
      return dart.const(new src__widgets__icon_data.IconData.new(61891, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_powerpoint*/get file_powerpoint() {
      return dart.const(new src__widgets__icon_data.IconData.new(61892, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_image*/get file_image() {
      return dart.const(new src__widgets__icon_data.IconData.new(61893, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_archive*/get file_archive() {
      return dart.const(new src__widgets__icon_data.IconData.new(61894, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_audio*/get file_audio() {
      return dart.const(new src__widgets__icon_data.IconData.new(61895, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_video*/get file_video() {
      return dart.const(new src__widgets__icon_data.IconData.new(61896, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.file_code*/get file_code() {
      return dart.const(new src__widgets__icon_data.IconData.new(61897, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.vine*/get vine() {
      return dart.const(new src__widgets__icon_data.IconData.new(61898, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.codeopen*/get codeopen() {
      return dart.const(new src__widgets__icon_data.IconData.new(61899, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.jsfiddle*/get jsfiddle() {
      return dart.const(new src__widgets__icon_data.IconData.new(61900, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.lifebuoy*/get lifebuoy() {
      return dart.const(new src__widgets__icon_data.IconData.new(61901, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.circle_notch*/get circle_notch() {
      return dart.const(new src__widgets__icon_data.IconData.new(61902, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.rebel*/get rebel() {
      return dart.const(new src__widgets__icon_data.IconData.new(61904, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.empire*/get empire() {
      return dart.const(new src__widgets__icon_data.IconData.new(61905, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.git_squared*/get git_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61906, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.git*/get git() {
      return dart.const(new src__widgets__icon_data.IconData.new(61907, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hacker_news*/get hacker_news() {
      return dart.const(new src__widgets__icon_data.IconData.new(61908, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tencent_weibo*/get tencent_weibo() {
      return dart.const(new src__widgets__icon_data.IconData.new(61909, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.qq*/get qq() {
      return dart.const(new src__widgets__icon_data.IconData.new(61910, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wechat*/get wechat() {
      return dart.const(new src__widgets__icon_data.IconData.new(61911, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.paper_plane*/get paper_plane() {
      return dart.const(new src__widgets__icon_data.IconData.new(61912, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.paper_plane_empty*/get paper_plane_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61913, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.history*/get history() {
      return dart.const(new src__widgets__icon_data.IconData.new(61914, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.circle_thin*/get circle_thin() {
      return dart.const(new src__widgets__icon_data.IconData.new(61915, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.header*/get header() {
      return dart.const(new src__widgets__icon_data.IconData.new(61916, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.paragraph*/get paragraph() {
      return dart.const(new src__widgets__icon_data.IconData.new(61917, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sliders*/get sliders() {
      return dart.const(new src__widgets__icon_data.IconData.new(61918, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.share*/get share() {
      return dart.const(new src__widgets__icon_data.IconData.new(61920, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.share_squared*/get share_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61921, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bomb*/get bomb() {
      return dart.const(new src__widgets__icon_data.IconData.new(61922, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.soccer_ball*/get soccer_ball() {
      return dart.const(new src__widgets__icon_data.IconData.new(61923, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tty*/get tty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61924, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.binoculars*/get binoculars() {
      return dart.const(new src__widgets__icon_data.IconData.new(61925, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.plug*/get plug() {
      return dart.const(new src__widgets__icon_data.IconData.new(61926, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.slideshare*/get slideshare() {
      return dart.const(new src__widgets__icon_data.IconData.new(61927, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.twitch*/get twitch() {
      return dart.const(new src__widgets__icon_data.IconData.new(61928, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.yelp*/get yelp() {
      return dart.const(new src__widgets__icon_data.IconData.new(61929, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.newspaper*/get newspaper() {
      return dart.const(new src__widgets__icon_data.IconData.new(61930, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wifi*/get wifi() {
      return dart.const(new src__widgets__icon_data.IconData.new(61931, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.calc*/get calc() {
      return dart.const(new src__widgets__icon_data.IconData.new(61932, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.paypal*/get paypal() {
      return dart.const(new src__widgets__icon_data.IconData.new(61933, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gwallet*/get gwallet() {
      return dart.const(new src__widgets__icon_data.IconData.new(61934, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cc_visa*/get cc_visa() {
      return dart.const(new src__widgets__icon_data.IconData.new(61936, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cc_mastercard*/get cc_mastercard() {
      return dart.const(new src__widgets__icon_data.IconData.new(61937, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cc_discover*/get cc_discover() {
      return dart.const(new src__widgets__icon_data.IconData.new(61938, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cc_amex*/get cc_amex() {
      return dart.const(new src__widgets__icon_data.IconData.new(61939, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cc_paypal*/get cc_paypal() {
      return dart.const(new src__widgets__icon_data.IconData.new(61940, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cc_stripe*/get cc_stripe() {
      return dart.const(new src__widgets__icon_data.IconData.new(61941, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bell_off*/get bell_off() {
      return dart.const(new src__widgets__icon_data.IconData.new(61942, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bell_off_empty*/get bell_off_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61943, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.trash*/get trash() {
      return dart.const(new src__widgets__icon_data.IconData.new(61944, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.copyright*/get copyright() {
      return dart.const(new src__widgets__icon_data.IconData.new(61945, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.at*/get at() {
      return dart.const(new src__widgets__icon_data.IconData.new(61946, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.eyedropper*/get eyedropper() {
      return dart.const(new src__widgets__icon_data.IconData.new(61947, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.brush*/get brush() {
      return dart.const(new src__widgets__icon_data.IconData.new(61948, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.birthday*/get birthday() {
      return dart.const(new src__widgets__icon_data.IconData.new(61949, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.chart_area*/get chart_area() {
      return dart.const(new src__widgets__icon_data.IconData.new(61950, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.chart_pie*/get chart_pie() {
      return dart.const(new src__widgets__icon_data.IconData.new(61952, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.chart_line*/get chart_line() {
      return dart.const(new src__widgets__icon_data.IconData.new(61953, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.lastfm*/get lastfm() {
      return dart.const(new src__widgets__icon_data.IconData.new(61954, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.lastfm_squared*/get lastfm_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(61955, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.toggle_off*/get toggle_off() {
      return dart.const(new src__widgets__icon_data.IconData.new(61956, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.toggle_on*/get toggle_on() {
      return dart.const(new src__widgets__icon_data.IconData.new(61957, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bicycle*/get bicycle() {
      return dart.const(new src__widgets__icon_data.IconData.new(61958, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bus*/get bus() {
      return dart.const(new src__widgets__icon_data.IconData.new(61959, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ioxhost*/get ioxhost() {
      return dart.const(new src__widgets__icon_data.IconData.new(61960, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.angellist*/get angellist() {
      return dart.const(new src__widgets__icon_data.IconData.new(61961, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cc*/get cc() {
      return dart.const(new src__widgets__icon_data.IconData.new(61962, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.shekel*/get shekel() {
      return dart.const(new src__widgets__icon_data.IconData.new(61963, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.meanpath*/get meanpath() {
      return dart.const(new src__widgets__icon_data.IconData.new(61964, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.buysellads*/get buysellads() {
      return dart.const(new src__widgets__icon_data.IconData.new(61965, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.connectdevelop*/get connectdevelop() {
      return dart.const(new src__widgets__icon_data.IconData.new(61966, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.dashcube*/get dashcube() {
      return dart.const(new src__widgets__icon_data.IconData.new(61968, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.forumbee*/get forumbee() {
      return dart.const(new src__widgets__icon_data.IconData.new(61969, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.leanpub*/get leanpub() {
      return dart.const(new src__widgets__icon_data.IconData.new(61970, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sellsy*/get sellsy() {
      return dart.const(new src__widgets__icon_data.IconData.new(61971, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.shirtsinbulk*/get shirtsinbulk() {
      return dart.const(new src__widgets__icon_data.IconData.new(61972, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.simplybuilt*/get simplybuilt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61973, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.skyatlas*/get skyatlas() {
      return dart.const(new src__widgets__icon_data.IconData.new(61974, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cart_plus*/get cart_plus() {
      return dart.const(new src__widgets__icon_data.IconData.new(61975, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cart_arrow_down*/get cart_arrow_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(61976, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.diamond*/get diamond() {
      return dart.const(new src__widgets__icon_data.IconData.new(61977, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.ship*/get ship() {
      return dart.const(new src__widgets__icon_data.IconData.new(61978, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.user_secret*/get user_secret() {
      return dart.const(new src__widgets__icon_data.IconData.new(61979, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.motorcycle*/get motorcycle() {
      return dart.const(new src__widgets__icon_data.IconData.new(61980, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.street_view*/get street_view() {
      return dart.const(new src__widgets__icon_data.IconData.new(61981, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.heartbeat*/get heartbeat() {
      return dart.const(new src__widgets__icon_data.IconData.new(61982, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.venus*/get venus() {
      return dart.const(new src__widgets__icon_data.IconData.new(61985, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mars*/get mars() {
      return dart.const(new src__widgets__icon_data.IconData.new(61986, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mercury*/get mercury() {
      return dart.const(new src__widgets__icon_data.IconData.new(61987, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.transgender*/get transgender() {
      return dart.const(new src__widgets__icon_data.IconData.new(61988, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.transgender_alt*/get transgender_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(61989, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.venus_double*/get venus_double() {
      return dart.const(new src__widgets__icon_data.IconData.new(61990, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mars_double*/get mars_double() {
      return dart.const(new src__widgets__icon_data.IconData.new(61991, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.venus_mars*/get venus_mars() {
      return dart.const(new src__widgets__icon_data.IconData.new(61992, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mars_stroke*/get mars_stroke() {
      return dart.const(new src__widgets__icon_data.IconData.new(61993, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mars_stroke_v*/get mars_stroke_v() {
      return dart.const(new src__widgets__icon_data.IconData.new(61994, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mars_stroke_h*/get mars_stroke_h() {
      return dart.const(new src__widgets__icon_data.IconData.new(61995, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.neuter*/get neuter() {
      return dart.const(new src__widgets__icon_data.IconData.new(61996, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.genderless*/get genderless() {
      return dart.const(new src__widgets__icon_data.IconData.new(61997, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.facebook_official*/get facebook_official() {
      return dart.const(new src__widgets__icon_data.IconData.new(62000, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pinterest*/get pinterest() {
      return dart.const(new src__widgets__icon_data.IconData.new(62001, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.whatsapp*/get whatsapp() {
      return dart.const(new src__widgets__icon_data.IconData.new(62002, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.server*/get server() {
      return dart.const(new src__widgets__icon_data.IconData.new(62003, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.user_plus*/get user_plus() {
      return dart.const(new src__widgets__icon_data.IconData.new(62004, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.user_times*/get user_times() {
      return dart.const(new src__widgets__icon_data.IconData.new(62005, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bed*/get bed() {
      return dart.const(new src__widgets__icon_data.IconData.new(62006, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.viacoin*/get viacoin() {
      return dart.const(new src__widgets__icon_data.IconData.new(62007, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.train*/get train() {
      return dart.const(new src__widgets__icon_data.IconData.new(62008, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.subway*/get subway() {
      return dart.const(new src__widgets__icon_data.IconData.new(62009, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.medium*/get medium() {
      return dart.const(new src__widgets__icon_data.IconData.new(62010, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.y_combinator*/get y_combinator() {
      return dart.const(new src__widgets__icon_data.IconData.new(62011, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.optin_monster*/get optin_monster() {
      return dart.const(new src__widgets__icon_data.IconData.new(62012, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.opencart*/get opencart() {
      return dart.const(new src__widgets__icon_data.IconData.new(62013, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.expeditedssl*/get expeditedssl() {
      return dart.const(new src__widgets__icon_data.IconData.new(62014, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.battery_4*/get battery_4() {
      return dart.const(new src__widgets__icon_data.IconData.new(62016, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.battery_3*/get battery_3() {
      return dart.const(new src__widgets__icon_data.IconData.new(62017, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.battery_2*/get battery_2() {
      return dart.const(new src__widgets__icon_data.IconData.new(62018, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.battery_1*/get battery_1() {
      return dart.const(new src__widgets__icon_data.IconData.new(62019, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.battery_0*/get battery_0() {
      return dart.const(new src__widgets__icon_data.IconData.new(62020, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mouse_pointer*/get mouse_pointer() {
      return dart.const(new src__widgets__icon_data.IconData.new(62021, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.i_cursor*/get i_cursor() {
      return dart.const(new src__widgets__icon_data.IconData.new(62022, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.object_group*/get object_group() {
      return dart.const(new src__widgets__icon_data.IconData.new(62023, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.object_ungroup*/get object_ungroup() {
      return dart.const(new src__widgets__icon_data.IconData.new(62024, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sticky_note*/get sticky_note() {
      return dart.const(new src__widgets__icon_data.IconData.new(62025, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sticky_note_o*/get sticky_note_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62026, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.cc_diners_club*/get cc_diners_club() {
      return dart.const(new src__widgets__icon_data.IconData.new(62028, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.clone*/get clone() {
      return dart.const(new src__widgets__icon_data.IconData.new(62029, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.balance_scale*/get balance_scale() {
      return dart.const(new src__widgets__icon_data.IconData.new(62030, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hourglass_o*/get hourglass_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62032, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hourglass_1*/get hourglass_1() {
      return dart.const(new src__widgets__icon_data.IconData.new(62033, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hourglass_2*/get hourglass_2() {
      return dart.const(new src__widgets__icon_data.IconData.new(62034, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hourglass_3*/get hourglass_3() {
      return dart.const(new src__widgets__icon_data.IconData.new(62035, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hourglass*/get hourglass() {
      return dart.const(new src__widgets__icon_data.IconData.new(62036, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hand_grab_o*/get hand_grab_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62037, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hand_paper_o*/get hand_paper_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62038, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hand_scissors_o*/get hand_scissors_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62039, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hand_lizard_o*/get hand_lizard_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62040, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hand_spock_o*/get hand_spock_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62041, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hand_pointer_o*/get hand_pointer_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62042, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hand_peace_o*/get hand_peace_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62043, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.trademark*/get trademark() {
      return dart.const(new src__widgets__icon_data.IconData.new(62044, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.registered*/get registered() {
      return dart.const(new src__widgets__icon_data.IconData.new(62045, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.creative_commons*/get creative_commons() {
      return dart.const(new src__widgets__icon_data.IconData.new(62046, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gg*/get gg() {
      return dart.const(new src__widgets__icon_data.IconData.new(62048, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gg_circle*/get gg_circle() {
      return dart.const(new src__widgets__icon_data.IconData.new(62049, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.tripadvisor*/get tripadvisor() {
      return dart.const(new src__widgets__icon_data.IconData.new(62050, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.odnoklassniki*/get odnoklassniki() {
      return dart.const(new src__widgets__icon_data.IconData.new(62051, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.odnoklassniki_square*/get odnoklassniki_square() {
      return dart.const(new src__widgets__icon_data.IconData.new(62052, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.get_pocket*/get get_pocket() {
      return dart.const(new src__widgets__icon_data.IconData.new(62053, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wikipedia_w*/get wikipedia_w() {
      return dart.const(new src__widgets__icon_data.IconData.new(62054, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.safari*/get safari() {
      return dart.const(new src__widgets__icon_data.IconData.new(62055, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.chrome*/get chrome() {
      return dart.const(new src__widgets__icon_data.IconData.new(62056, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.firefox*/get firefox() {
      return dart.const(new src__widgets__icon_data.IconData.new(62057, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.opera*/get opera() {
      return dart.const(new src__widgets__icon_data.IconData.new(62058, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.internet_explorer*/get internet_explorer() {
      return dart.const(new src__widgets__icon_data.IconData.new(62059, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.television*/get television() {
      return dart.const(new src__widgets__icon_data.IconData.new(62060, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.contao*/get contao() {
      return dart.const(new src__widgets__icon_data.IconData.new(62061, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.px500*/get px500() {
      return dart.const(new src__widgets__icon_data.IconData.new(62062, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.amazon*/get amazon() {
      return dart.const(new src__widgets__icon_data.IconData.new(62064, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.calendar_plus_o*/get calendar_plus_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62065, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.calendar_minus_o*/get calendar_minus_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62066, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.calendar_times_o*/get calendar_times_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62067, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.calendar_check_o*/get calendar_check_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62068, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.industry*/get industry() {
      return dart.const(new src__widgets__icon_data.IconData.new(62069, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.map_pin*/get map_pin() {
      return dart.const(new src__widgets__icon_data.IconData.new(62070, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.map_signs*/get map_signs() {
      return dart.const(new src__widgets__icon_data.IconData.new(62071, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.map_o*/get map_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62072, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.map*/get map() {
      return dart.const(new src__widgets__icon_data.IconData.new(62073, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.commenting*/get commenting() {
      return dart.const(new src__widgets__icon_data.IconData.new(62074, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.commenting_o*/get commenting_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62075, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.houzz*/get houzz() {
      return dart.const(new src__widgets__icon_data.IconData.new(62076, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.vimeo*/get vimeo() {
      return dart.const(new src__widgets__icon_data.IconData.new(62077, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.black_tie*/get black_tie() {
      return dart.const(new src__widgets__icon_data.IconData.new(62078, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.fonticons*/get fonticons() {
      return dart.const(new src__widgets__icon_data.IconData.new(62080, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.reddit_alien*/get reddit_alien() {
      return dart.const(new src__widgets__icon_data.IconData.new(62081, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.edge*/get edge() {
      return dart.const(new src__widgets__icon_data.IconData.new(62082, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.credit_card_alt*/get credit_card_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(62083, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.codiepie*/get codiepie() {
      return dart.const(new src__widgets__icon_data.IconData.new(62084, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.modx*/get modx() {
      return dart.const(new src__widgets__icon_data.IconData.new(62085, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.fort_awesome*/get fort_awesome() {
      return dart.const(new src__widgets__icon_data.IconData.new(62086, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.usb*/get usb() {
      return dart.const(new src__widgets__icon_data.IconData.new(62087, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.product_hunt*/get product_hunt() {
      return dart.const(new src__widgets__icon_data.IconData.new(62088, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.mixcloud*/get mixcloud() {
      return dart.const(new src__widgets__icon_data.IconData.new(62089, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.scribd*/get scribd() {
      return dart.const(new src__widgets__icon_data.IconData.new(62090, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pause_circle*/get pause_circle() {
      return dart.const(new src__widgets__icon_data.IconData.new(62091, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pause_circle_o*/get pause_circle_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62092, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.stop_circle*/get stop_circle() {
      return dart.const(new src__widgets__icon_data.IconData.new(62093, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.stop_circle_o*/get stop_circle_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62094, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.shopping_bag*/get shopping_bag() {
      return dart.const(new src__widgets__icon_data.IconData.new(62096, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.shopping_basket*/get shopping_basket() {
      return dart.const(new src__widgets__icon_data.IconData.new(62097, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.hashtag*/get hashtag() {
      return dart.const(new src__widgets__icon_data.IconData.new(62098, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bluetooth*/get bluetooth() {
      return dart.const(new src__widgets__icon_data.IconData.new(62099, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.bluetooth_b*/get bluetooth_b() {
      return dart.const(new src__widgets__icon_data.IconData.new(62100, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.percent*/get percent() {
      return dart.const(new src__widgets__icon_data.IconData.new(62101, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.gitlab*/get gitlab() {
      return dart.const(new src__widgets__icon_data.IconData.new(62102, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wpbeginner*/get wpbeginner() {
      return dart.const(new src__widgets__icon_data.IconData.new(62103, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wpforms*/get wpforms() {
      return dart.const(new src__widgets__icon_data.IconData.new(62104, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.envira*/get envira() {
      return dart.const(new src__widgets__icon_data.IconData.new(62105, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.universal_access*/get universal_access() {
      return dart.const(new src__widgets__icon_data.IconData.new(62106, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.wheelchair_alt*/get wheelchair_alt() {
      return dart.const(new src__widgets__icon_data.IconData.new(62107, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.question_circle_o*/get question_circle_o() {
      return dart.const(new src__widgets__icon_data.IconData.new(62108, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.blind*/get blind() {
      return dart.const(new src__widgets__icon_data.IconData.new(62109, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.audio_description*/get audio_description() {
      return dart.const(new src__widgets__icon_data.IconData.new(62110, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.volume_control_phone*/get volume_control_phone() {
      return dart.const(new src__widgets__icon_data.IconData.new(62112, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.braille*/get braille() {
      return dart.const(new src__widgets__icon_data.IconData.new(62113, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.assistive_listening_systems*/get assistive_listening_systems() {
      return dart.const(new src__widgets__icon_data.IconData.new(62114, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.american_sign_language_interpreting*/get american_sign_language_interpreting() {
      return dart.const(new src__widgets__icon_data.IconData.new(62115, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.asl_interpreting*/get asl_interpreting() {
      return dart.const(new src__widgets__icon_data.IconData.new(62116, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.glide*/get glide() {
      return dart.const(new src__widgets__icon_data.IconData.new(62117, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.glide_g*/get glide_g() {
      return dart.const(new src__widgets__icon_data.IconData.new(62118, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.sign_language*/get sign_language() {
      return dart.const(new src__widgets__icon_data.IconData.new(62119, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.low_vision*/get low_vision() {
      return dart.const(new src__widgets__icon_data.IconData.new(62120, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.viadeo*/get viadeo() {
      return dart.const(new src__widgets__icon_data.IconData.new(62121, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.viadeo_square*/get viadeo_square() {
      return dart.const(new src__widgets__icon_data.IconData.new(62122, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.snapchat*/get snapchat() {
      return dart.const(new src__widgets__icon_data.IconData.new(62123, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.snapchat_ghost*/get snapchat_ghost() {
      return dart.const(new src__widgets__icon_data.IconData.new(62124, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.snapchat_square*/get snapchat_square() {
      return dart.const(new src__widgets__icon_data.IconData.new(62125, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.pied_piper*/get pied_piper() {
      return dart.const(new src__widgets__icon_data.IconData.new(62126, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.first_order*/get first_order() {
      return dart.const(new src__widgets__icon_data.IconData.new(62128, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.yoast*/get yoast() {
      return dart.const(new src__widgets__icon_data.IconData.new(62129, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.themeisle*/get themeisle() {
      return dart.const(new src__widgets__icon_data.IconData.new(62130, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.google_plus_circle*/get google_plus_circle() {
      return dart.const(new src__widgets__icon_data.IconData.new(62131, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.font_awesome*/get font_awesome() {
      return dart.const(new src__widgets__icon_data.IconData.new(62132, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.github_squared*/get github_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(62208, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.twitter_squared*/get twitter_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(62212, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.facebook_squared*/get facebook_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(62216, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    },
    /*font_awesome_icons.FontAwesome.linkedin_squared*/get linkedin_squared() {
      return dart.const(new src__widgets__icon_data.IconData.new(62220, {fontFamily: font_awesome_icons.FontAwesome._kFontFam}));
    }
  });
  dart.trackLibraries("packages/example/font_awesome_icons", {
    "package:example/font_awesome_icons.dart": font_awesome_icons
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/example/font_awesome_icons.dart"],"names":[],"mappings":"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","file":"font_awesome_icons.ddc.js"}');
  // Exports:
  return {
    font_awesome_icons: font_awesome_icons
  };
});

//# sourceMappingURL=font_awesome_icons.ddc.js.map
