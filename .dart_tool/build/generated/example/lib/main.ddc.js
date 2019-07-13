define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/provider_web/provider_web', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/example/font_awesome_icons'], function(dart_sdk, assertions, provider_web, animation, material, ui, font_awesome_icons) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const src__foundation__synchronous_future = assertions.src__foundation__synchronous_future;
  const src__provider_web = provider_web.src__provider_web;
  const src__change_notifier_provider = provider_web.src__change_notifier_provider;
  const src__consumer = provider_web.src__consumer;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__localizations = animation.src__widgets__localizations;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__material__app = material.src__material__app;
  const src__material__material_localizations = material.src__material__material_localizations;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__floating_action_button = material.src__material__floating_action_button;
  const src__material__icons = material.src__material__icons;
  const src__material__theme = material.src__material__theme;
  const ui$ = ui.ui;
  const font_awesome_icons$ = font_awesome_icons.font_awesome_icons;
  const main = Object.create(dart.library);
  let ChangeNotifierProviderOfCounter = () => (ChangeNotifierProviderOfCounter = dart.constFn(src__change_notifier_provider.ChangeNotifierProvider$(main.Counter)))();
  let BuildContextToCounter = () => (BuildContextToCounter = dart.constFn(dart.fnType(main.Counter, [src__widgets__framework.BuildContext])))();
  let JSArrayOfSingleChildCloneableWidget = () => (JSArrayOfSingleChildCloneableWidget = dart.constFn(_interceptors.JSArray$(src__provider_web.SingleChildCloneableWidget)))();
  let ConsumerOfCounter = () => (ConsumerOfCounter = dart.constFn(src__consumer.Consumer$(main.Counter)))();
  let JSArrayOfLocalizationsDelegate = () => (JSArrayOfLocalizationsDelegate = dart.constFn(_interceptors.JSArray$(src__widgets__localizations.LocalizationsDelegate)))();
  let BuildContextAndCounterAndWidgetToMaterialApp = () => (BuildContextAndCounterAndWidgetToMaterialApp = dart.constFn(dart.fnType(src__material__app.MaterialApp, [src__widgets__framework.BuildContext, main.Counter, src__widgets__framework.Widget])))();
  let SynchronousFutureOfExampleLocalizations = () => (SynchronousFutureOfExampleLocalizations = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(main.ExampleLocalizations)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const _count$ = dart.privateName(main, "_count");
  const Object_ChangeNotifier$ = class Object_ChangeNotifier extends core.Object {};
  (Object_ChangeNotifier$.new = function() {
    src__foundation__change_notifier.ChangeNotifier.new.call(this);
  }).prototype = Object_ChangeNotifier$.prototype;
  dart.applyMixin(Object_ChangeNotifier$, src__foundation__change_notifier.ChangeNotifier);
  main.Counter = class Counter extends Object_ChangeNotifier$ {
    get count() {
      return this[_count$];
    }
    increment() {
      this[_count$] = dart.notNull(this[_count$]) + 1;
      this.notifyListeners();
    }
  };
  (main.Counter.new = function() {
    this[_count$] = 0;
    main.Counter.__proto__.new.call(this);
    ;
  }).prototype = main.Counter.prototype;
  dart.addTypeTests(main.Counter);
  dart.setMethodSignature(main.Counter, () => ({
    __proto__: dart.getMethods(main.Counter.__proto__),
    increment: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(main.Counter, () => ({
    __proto__: dart.getGetters(main.Counter.__proto__),
    count: core.int
  }));
  dart.setLibraryUri(main.Counter, "package:example/main.dart");
  dart.setFieldSignature(main.Counter, () => ({
    __proto__: dart.getFields(main.Counter.__proto__),
    [_count$]: dart.fieldType(core.int)
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__provider_web.MultiProvider.new({providers: JSArrayOfSingleChildCloneableWidget().of([new (ChangeNotifierProviderOfCounter()).new({builder: dart.fn(_ => new main.Counter.new(), BuildContextToCounter()), $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 32, name: "builder"})))], src__widgets__widget_inspector._Location))})))})]), child: new (ConsumerOfCounter()).new({builder: dart.fn((context, counter, _) => new src__material__app.MaterialApp.new({supportedLocales: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new ui$.Locale.new("en")))], ui$.Locale)), localizationsDelegates: JSArrayOfLocalizationsDelegate().of([src__material__material_localizations.DefaultMaterialLocalizations.delegate, src__widgets__localizations.DefaultWidgetsLocalizations.delegate, new main._ExampleLocalizationsDelegate.new(counter.count)]), home: const$6 || (const$6 = dart.const(new main.MyHomePage.new({$creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 25, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$4 || (const$4 = dart.constList([], src__widgets__widget_inspector._Location))})))}))), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 18, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 13, name: "supportedLocales"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, name: "localizationsDelegates"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 13, name: "home"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndCounterAndWidgetToMaterialApp()), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 14, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 9, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 12, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 7, name: "providers"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:example/main.dart");
  main.ExampleLocalizations = class ExampleLocalizations extends core.Object {
    static of(context) {
      return src__widgets__localizations.Localizations.of(main.ExampleLocalizations, context, dart.wrapType(main.ExampleLocalizations));
    }
    get title() {
      return "Tapped " + dart.str(this[_count$]) + " times";
    }
  };
  (main.ExampleLocalizations.new = function(_count) {
    this[_count$] = _count;
    ;
  }).prototype = main.ExampleLocalizations.prototype;
  dart.addTypeTests(main.ExampleLocalizations);
  dart.setGetterSignature(main.ExampleLocalizations, () => ({
    __proto__: dart.getGetters(main.ExampleLocalizations.__proto__),
    title: core.String
  }));
  dart.setLibraryUri(main.ExampleLocalizations, "package:example/main.dart");
  dart.setFieldSignature(main.ExampleLocalizations, () => ({
    __proto__: dart.getFields(main.ExampleLocalizations.__proto__),
    [_count$]: dart.finalFieldType(core.int)
  }));
  main._ExampleLocalizationsDelegate = class _ExampleLocalizationsDelegate extends src__widgets__localizations.LocalizationsDelegate$(main.ExampleLocalizations) {
    isSupported(locale) {
      return locale.languageCode === "en";
    }
    load(locale) {
      return new (SynchronousFutureOfExampleLocalizations()).new(new main.ExampleLocalizations.new(this.count));
    }
    shouldReload(old) {
      main._ExampleLocalizationsDelegate._check(old);
      return old.count != this.count;
    }
  };
  (main._ExampleLocalizationsDelegate.new = function(count) {
    this.count = count;
    main._ExampleLocalizationsDelegate.__proto__.new.call(this);
    ;
  }).prototype = main._ExampleLocalizationsDelegate.prototype;
  dart.addTypeTests(main._ExampleLocalizationsDelegate);
  dart.setMethodSignature(main._ExampleLocalizationsDelegate, () => ({
    __proto__: dart.getMethods(main._ExampleLocalizationsDelegate.__proto__),
    isSupported: dart.fnType(core.bool, [ui$.Locale]),
    load: dart.fnType(async.Future$(main.ExampleLocalizations), [ui$.Locale]),
    shouldReload: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(main._ExampleLocalizationsDelegate, "package:example/main.dart");
  dart.setFieldSignature(main._ExampleLocalizationsDelegate, () => ({
    __proto__: dart.getFields(main._ExampleLocalizationsDelegate.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  main.MyHomePage = class MyHomePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: const$21 || (const$21 = dart.const(new main.Title.new({$creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 35, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$19 || (const$19 = dart.constList([], src__widgets__widget_inspector._Location))})))}))), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 15, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 22, name: "title"})))], src__widgets__widget_inspector._Location))})))}), body: const$31 || (const$31 = dart.const(new src__widgets__basic.Center.new({child: const$27 || (const$27 = dart.const(new main.CounterLabel.new({$creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 33, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$25 || (const$25 = dart.constList([], src__widgets__widget_inspector._Location))})))}))), $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 19, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 26, name: "child"})))], src__widgets__widget_inspector._Location))})))}))), floatingActionButton: const$34 || (const$34 = dart.const(new main.IncrementCounterButton.new({$creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 35, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$32 || (const$32 = dart.constList([], src__widgets__widget_inspector._Location))})))}))), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 12, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 7, name: "appBar"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 7, name: "body"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 7, name: "floatingActionButton"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyHomePage, "package:example/main.dart");
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  main.IncrementCounterButton = class IncrementCounterButton extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
          src__provider_web.Provider.of(main.Counter, context, {listen: false}).increment();
        }, VoidToNull()), tooltip: "Increment", child: const$43 || (const$43 = dart.const(new src__widgets__icon.Icon.new(src__material__icons.Icons.add, {$creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 20, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 31, name: "icon"})))], src__widgets__widget_inspector._Location))})))}))), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 12, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 7, name: "onPressed"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 7, name: "tooltip"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.IncrementCounterButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.IncrementCounterButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.IncrementCounterButton.prototype;
  dart.addTypeTests(main.IncrementCounterButton);
  dart.setMethodSignature(main.IncrementCounterButton, () => ({
    __proto__: dart.getMethods(main.IncrementCounterButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.IncrementCounterButton, "package:example/main.dart");
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  main.CounterLabel = class CounterLabel extends src__widgets__framework.StatelessWidget {
    build(context) {
      let counter = src__provider_web.Provider.of(main.Counter, context);
      return new src__widgets__basic.Column.new({mainAxisSize: src__rendering__flex.MainAxisSize.min, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([const$52 || (const$52 = dart.const(new src__widgets__text.Text.new("You have pushed this button way too many times.  Look:", {$creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 15, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 11, name: "data"})))], src__widgets__widget_inspector._Location))})))}))), new src__widgets__text.Text.new(dart.str(counter.count), {style: src__material__theme.Theme.of(context).textTheme.display1, $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 9, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 29, name: "data"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__icon.Icon.new(font_awesome_icons$.FontAwesome.award, {$creationLocationd_0dea112b090073317d4: const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 9, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$58 || (const$58 = dart.constList([const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 26, name: "icon"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 12, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$63 || (const$63 = dart.constList([const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 7, name: "mainAxisSize"}))), const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 7, name: "mainAxisAlignment"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.CounterLabel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.CounterLabel.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.CounterLabel.prototype;
  dart.addTypeTests(main.CounterLabel);
  dart.setMethodSignature(main.CounterLabel, () => ({
    __proto__: dart.getMethods(main.CounterLabel.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.CounterLabel, "package:example/main.dart");
  let const$65;
  let const$66;
  let const$67;
  main.Title = class Title extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__text.Text.new(main.ExampleLocalizations.of(context).title, {$creationLocationd_0dea112b090073317d4: const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 12, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$66 || (const$66 = dart.constList([const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 50, name: "data"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.Title.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.Title.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.Title.prototype;
  dart.addTypeTests(main.Title);
  dart.setMethodSignature(main.Title, () => ({
    __proto__: dart.getMethods(main.Title.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.Title, "package:example/main.dart");
  let const$68;
  let const$69;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 23, file: "org-dartlang-app:///packages/example/main.dart", parameterLocations: const$68 || (const$68 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/example/main", {
    "package:example/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/example/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUmB;IAAM;;MAGrB,gBAAM,aAAN,iBAAM;MACN;IACF;;;IANI,gBAAS;;;EAOf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,qDACM,0CACT,sDAAgC,QAAC,KAAM,4eAElC,wCACI,SAAC,SAAS,SAAS,MACnB,0DACa,sCAAO,oDAAO,gDACR,qCACO,6EACD,kEAC5B,2CAA8B,AAAQ,OAAD,iBAE3B;IAKtB;;;;;;EACF;;;;;;;;cAG8C;AACxC,YAAc,yEAAyB,OAAO,EAAE;IAAqB;;AAMrD,YAAA,AAAsB,sBAAb,iBAAM;IAAO;;;IAJV;;EAAO;;;;;;;;;;;;gBAcf;AAAW,YAAA,AAAO,AAAa,OAAd,kBAAiB;IAAI;SAGrB;AACrC,iEAAkB,kCAAqB;IAAO;iBAGF;;AAAQ,YAAA,AAAI,IAAD,UAAU;IAAK;;;IAZjC;AAAnC;;EAAyC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAmBrB;AACxB,YAAO,mDACG,8CAAoB,mzBAChB,8EAAc,40BACE;IAEhC;;;QATsB;;AAAQ,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;UAgBnB;AACxB,YAAO,gFACM;UAGA,AAAoC,4CAAxB,OAAO,WAAU;mCAE/B,oBACI,mEAAW;IAE5B;;;QAbkC;;AAAQ,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;UAoB/B;AAClB,oBAAmB,4CAAY,OAAO;AAC5C,YAAO,mDACsB,0DACU,yDACnB,sBACV,mEACJ,sfAEF,gCACoB,SAAf,AAAQ,OAAD,iBACG,AAAY,AAAU,8BAAnB,OAAO,6kBAEzB,gCAAiB;IAGvB;;;QAnBwB;;AAAQ,qDAAW,GAAG;;EAAC;;;;;;;;;;;UA0BrB;AACxB,YAAO,iCAA0B,AAAY,6BAAT,OAAO;IAC7C;;;QALiB;;AAAQ,8CAAW,GAAG;;EAAC;;;;;;;;;;AAtH3B,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
