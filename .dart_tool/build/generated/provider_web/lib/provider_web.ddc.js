define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/animation'], function(dart_sdk, assertions, animation) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__value_listenable_builder = animation.src__widgets__value_listenable_builder;
  const src__widgets__async = animation.src__widgets__async;
  const provider_web = Object.create(dart.library);
  const src__value_listenable_provider = Object.create(dart.library);
  const src__provider_web = Object.create(dart.library);
  const src__delegate_widget = Object.create(dart.library);
  const src__listenable_provider = Object.create(dart.library);
  const src__proxy_provider = Object.create(dart.library);
  const src__change_notifier_provider = Object.create(dart.library);
  const src__consumer = Object.create(dart.library);
  const src__async_provider = Object.create(dart.library);
  const $reversed = dartx.reversed;
  const $runtimeType = dartx.runtimeType;
  const $_equals = dartx._equals;
  const $add = dartx.add;
  let BuildContextAndValueNotifierTovoid = () => (BuildContextAndValueNotifierTovoid = dart.constFn(dart.fnType(dart.void, [src__widgets__framework.BuildContext, src__foundation__change_notifier.ValueNotifier])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let TToNull = () => (TToNull = dart.constFn(dart.gFnType(T => [core.Null, [T]])))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ProxyProviderStateOfProxyProviderWidget = () => (ProxyProviderStateOfProxyProviderWidget = dart.constFn(src__proxy_provider.ProxyProviderState$(src__proxy_provider.ProxyProviderWidget)))();
  let BuildContextAndChangeNotifierTovoid = () => (BuildContextAndChangeNotifierTovoid = dart.constFn(dart.fnType(dart.void, [src__widgets__framework.BuildContext, src__foundation__change_notifier.ChangeNotifier])))();
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
  src__delegate_widget.DelegateWidget = class DelegateWidget extends src__widgets__framework.StatefulWidget {
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    createElement() {
      return new src__delegate_widget._DelegateElement.new(this);
    }
    createState() {
      return new src__delegate_widget._DelegateWidgetState.new();
    }
  };
  (src__delegate_widget.DelegateWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$] = delegate;
    if (!(delegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/delegate_widget.dart", 80, 16, "delegate != null");
    src__delegate_widget.DelegateWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__delegate_widget.DelegateWidget.prototype;
  dart.addTypeTests(src__delegate_widget.DelegateWidget);
  const delegate$ = Symbol("DelegateWidget.delegate");
  dart.setMethodSignature(src__delegate_widget.DelegateWidget, () => ({
    __proto__: dart.getMethods(src__delegate_widget.DelegateWidget.__proto__),
    createState: dart.fnType(src__delegate_widget._DelegateWidgetState, [])
  }));
  dart.setLibraryUri(src__delegate_widget.DelegateWidget, "package:provider_web/src/delegate_widget.dart");
  dart.setFieldSignature(src__delegate_widget.DelegateWidget, () => ({
    __proto__: dart.getFields(src__delegate_widget.DelegateWidget.__proto__),
    delegate: dart.finalFieldType(src__delegate_widget.StateDelegate)
  }));
  const _is_ValueDelegateWidget_default = Symbol('_is_ValueDelegateWidget_default');
  src__delegate_widget.ValueDelegateWidget$ = dart.generic(T => {
    let ValueStateDelegateOfT = () => (ValueStateDelegateOfT = dart.constFn(src__delegate_widget.ValueStateDelegate$(T)))();
    class ValueDelegateWidget extends src__delegate_widget.DelegateWidget {
      get delegate() {
        return ValueStateDelegateOfT().as(super.delegate);
      }
    }
    (ValueDelegateWidget.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ValueDelegateWidget.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ValueDelegateWidget.prototype;
    dart.addTypeTests(ValueDelegateWidget);
    ValueDelegateWidget.prototype[_is_ValueDelegateWidget_default] = true;
    dart.setGetterSignature(ValueDelegateWidget, () => ({
      __proto__: dart.getGetters(ValueDelegateWidget.__proto__),
      delegate: src__delegate_widget.ValueStateDelegate$(T)
    }));
    dart.setLibraryUri(ValueDelegateWidget, "package:provider_web/src/delegate_widget.dart");
    return ValueDelegateWidget;
  });
  src__delegate_widget.ValueDelegateWidget = src__delegate_widget.ValueDelegateWidget$();
  dart.addTypeTests(src__delegate_widget.ValueDelegateWidget, _is_ValueDelegateWidget_default);
  const _is_ValueListenableProvider_default = Symbol('_is_ValueListenableProvider_default');
  src__value_listenable_provider.ValueListenableProvider$ = dart.generic(T => {
    let ValueNotifierOfT = () => (ValueNotifierOfT = dart.constFn(src__foundation__change_notifier.ValueNotifier$(T)))();
    let BuilderStateDelegateOfValueNotifierOfT = () => (BuilderStateDelegateOfValueNotifierOfT = dart.constFn(src__delegate_widget.BuilderStateDelegate$(ValueNotifierOfT())))();
    let ValueListenableOfT = () => (ValueListenableOfT = dart.constFn(src__foundation__change_notifier.ValueListenable$(T)))();
    let SingleValueDelegateOfValueListenableOfT = () => (SingleValueDelegateOfValueListenableOfT = dart.constFn(src__delegate_widget.SingleValueDelegate$(ValueListenableOfT())))();
    let ValueListenableProviderOfT = () => (ValueListenableProviderOfT = dart.constFn(src__value_listenable_provider.ValueListenableProvider$(T)))();
    let ValueListenableBuilderOfT = () => (ValueListenableBuilderOfT = dart.constFn(src__widgets__value_listenable_builder.ValueListenableBuilder$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(src__provider_web.InheritedProvider$(T)))();
    let BuildContextAndTAndWidgetToInheritedProviderOfT = () => (BuildContextAndTAndWidgetToInheritedProviderOfT = dart.constFn(dart.fnType(InheritedProviderOfT(), [src__widgets__framework.BuildContext, T, src__widgets__framework.Widget])))();
    class ValueListenableProvider extends src__delegate_widget.ValueDelegateWidget$(src__foundation__change_notifier.ValueListenable$(T)) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      static _dispose(context, notifier) {
        notifier.dispose();
      }
      cloneWithChild(child) {
        return new (ValueListenableProviderOfT()).__({key: this.key, delegate: this.delegate, updateShouldNotify: this.updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 36, file: "org-dartlang-app:///packages/provider_web/src/value_listenable_provider.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 7, name: "key"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 7, name: "delegate"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 7, name: "updateShouldNotify"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      build(context) {
        return new (ValueListenableBuilderOfT()).new({valueListenable: this.delegate.value, builder: dart.fn((_, value, child) => new (InheritedProviderOfT()).new({value: value, updateShouldNotify: this.updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 16, file: "org-dartlang-app:///packages/provider_web/src/value_listenable_provider.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 11, name: "value"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 11, name: "updateShouldNotify"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndTAndWidgetToInheritedProviderOfT()), child: this.child, $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 12, file: "org-dartlang-app:///packages/provider_web/src/value_listenable_provider.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 7, name: "valueListenable"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 7, name: "builder"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (ValueListenableProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ValueListenableProvider.__.call(this, {key: key, delegate: new (BuilderStateDelegateOfValueNotifierOfT()).new(builder, {dispose: dart.fn(src__value_listenable_provider.ValueListenableProvider._dispose, BuildContextAndValueNotifierTovoid())}), updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ValueListenableProvider.prototype;
    (ValueListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ValueListenableProvider.__.call(this, {key: key, delegate: new (SingleValueDelegateOfValueListenableOfT()).new(value), updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ValueListenableProvider.prototype;
    (ValueListenableProvider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      ValueListenableProvider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ValueListenableProvider.prototype;
    dart.addTypeTests(ValueListenableProvider);
    ValueListenableProvider.prototype[_is_ValueListenableProvider_default] = true;
    const child$ = Symbol("ValueListenableProvider.child");
    const updateShouldNotify$ = Symbol("ValueListenableProvider.updateShouldNotify");
    ValueListenableProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(ValueListenableProvider, () => ({
      __proto__: dart.getMethods(ValueListenableProvider.__proto__),
      cloneWithChild: dart.fnType(src__value_listenable_provider.ValueListenableProvider$(T), [src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setLibraryUri(ValueListenableProvider, "package:provider_web/src/value_listenable_provider.dart");
    dart.setFieldSignature(ValueListenableProvider, () => ({
      __proto__: dart.getFields(ValueListenableProvider.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return ValueListenableProvider;
  });
  src__value_listenable_provider.ValueListenableProvider = src__value_listenable_provider.ValueListenableProvider$();
  dart.addTypeTests(src__value_listenable_provider.ValueListenableProvider, _is_ValueListenableProvider_default);
  src__provider_web.SingleChildCloneableWidget = class SingleChildCloneableWidget extends core.Object {};
  (src__provider_web.SingleChildCloneableWidget.new = function() {
    ;
  }).prototype = src__provider_web.SingleChildCloneableWidget.prototype;
  dart.addTypeTests(src__provider_web.SingleChildCloneableWidget);
  src__provider_web.SingleChildCloneableWidget[dart.implements] = () => [src__widgets__framework.Widget];
  dart.setLibraryUri(src__provider_web.SingleChildCloneableWidget, "package:provider_web/src/provider_web.dart");
  const _value = dart.privateName(src__provider_web, "_value");
  const _updateShouldNotify = dart.privateName(src__provider_web, "_updateShouldNotify");
  const _is_InheritedProvider_default = Symbol('_is_InheritedProvider_default');
  src__provider_web.InheritedProvider$ = dart.generic(T => {
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(src__provider_web.InheritedProvider$(T)))();
    class InheritedProvider extends src__widgets__framework.InheritedWidget {
      updateShouldNotify(oldWidget) {
        InheritedProviderOfT()._check(oldWidget);
        if (this[_updateShouldNotify] != null) {
          return this[_updateShouldNotify](oldWidget[_value], this[_value]);
        }
        return !dart.equals(oldWidget[_value], this[_value]);
      }
    }
    (InheritedProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[_value] = value;
      this[_updateShouldNotify] = updateShouldNotify;
      InheritedProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = InheritedProvider.prototype;
    dart.addTypeTests(InheritedProvider);
    InheritedProvider.prototype[_is_InheritedProvider_default] = true;
    dart.setMethodSignature(InheritedProvider, () => ({
      __proto__: dart.getMethods(InheritedProvider.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(InheritedProvider, "package:provider_web/src/provider_web.dart");
    dart.setFieldSignature(InheritedProvider, () => ({
      __proto__: dart.getFields(InheritedProvider.__proto__),
      [_value]: dart.finalFieldType(T),
      [_updateShouldNotify]: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return InheritedProvider;
  });
  src__provider_web.InheritedProvider = src__provider_web.InheritedProvider$();
  dart.addTypeTests(src__provider_web.InheritedProvider, _is_InheritedProvider_default);
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  src__provider_web.MultiProvider = class MultiProvider extends src__widgets__framework.StatelessWidget {
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let tree = this.child;
      for (let provider of this.providers[$reversed]) {
        tree = provider.cloneWithChild(tree);
      }
      return tree;
    }
    cloneWithChild(child) {
      return new src__provider_web.MultiProvider.new({key: this.key, providers: this.providers, child: child, $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 12, file: "org-dartlang-app:///packages/provider_web/src/provider_web.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 136, column: 7, name: "key"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 7, name: "providers"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__provider_web.MultiProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[providers$] = providers;
    this[child$] = child;
    if (!(providers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/provider_web.dart", 103, 16, "providers != null");
    src__provider_web.MultiProvider.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__provider_web.MultiProvider.prototype;
  dart.addTypeTests(src__provider_web.MultiProvider);
  const providers$ = Symbol("MultiProvider.providers");
  const child$ = Symbol("MultiProvider.child");
  src__provider_web.MultiProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
  dart.setMethodSignature(src__provider_web.MultiProvider, () => ({
    __proto__: dart.getMethods(src__provider_web.MultiProvider.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    cloneWithChild: dart.fnType(src__provider_web.MultiProvider, [src__widgets__framework.Widget])
  }));
  dart.setLibraryUri(src__provider_web.MultiProvider, "package:provider_web/src/provider_web.dart");
  dart.setFieldSignature(src__provider_web.MultiProvider, () => ({
    __proto__: dart.getFields(src__provider_web.MultiProvider.__proto__),
    providers: dart.finalFieldType(core.List$(src__provider_web.SingleChildCloneableWidget)),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
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
  const _is_Provider_default = Symbol('_is_Provider_default');
  src__provider_web.Provider$ = dart.generic(T => {
    let BuilderStateDelegateOfT = () => (BuilderStateDelegateOfT = dart.constFn(src__delegate_widget.BuilderStateDelegate$(T)))();
    let SingleValueDelegateOfT = () => (SingleValueDelegateOfT = dart.constFn(src__delegate_widget.SingleValueDelegate$(T)))();
    let ProviderOfT = () => (ProviderOfT = dart.constFn(src__provider_web.Provider$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(src__provider_web.InheritedProvider$(T)))();
    class Provider extends src__delegate_widget.ValueDelegateWidget$(T) {
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      static of(T, context, opts) {
        let t0;
        let listen = opts && 'listen' in opts ? opts.listen : true;
        let type = src__provider_web._typeOf(src__provider_web.InheritedProvider$(T));
        let provider = dart.test(listen) ? src__provider_web.InheritedProvider$(T).as(context.inheritFromWidgetOfExactType(type)) : src__provider_web.InheritedProvider$(T).as((t0 = context.ancestorInheritedElementForWidgetOfExactType(type), t0 == null ? null : t0.widget));
        if (provider == null) {
          dart.throw(new src__provider_web.ProviderNotFoundError.new(dart.wrapType(T), dart.runtimeType(context.widget)));
        }
        return provider[_value];
      }
      cloneWithChild(child) {
        return new (ProviderOfT()).__({key: this.key, delegate: this.delegate, updateShouldNotify: this.updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 286, column: 21, file: "org-dartlang-app:///packages/provider_web/src/provider_web.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 287, column: 7, name: "key"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 288, column: 7, name: "delegate"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 289, column: 7, name: "updateShouldNotify"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 290, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      build(context) {
        if (!dart.test(dart.fn(() => {
          let t0;
          t0 = src__provider_web.Provider.debugCheckInvalidValueType;
          t0 == null ? null : t0(T, this.delegate.value);
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/provider_web.dart", 302, 12, "() {\n      Provider.debugCheckInvalidValueType?.call<T>(delegate.value);\n      return true;\n    }()");
        return new (InheritedProviderOfT()).new({value: this.delegate.value, updateShouldNotify: this.updateShouldNotify, child: this.child, $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 306, column: 12, file: "org-dartlang-app:///packages/provider_web/src/provider_web.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 307, column: 7, name: "value"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 308, column: 7, name: "updateShouldNotify"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 309, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (Provider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      Provider.__.call(this, {key: key, delegate: new (BuilderStateDelegateOfT()).new(builder, {dispose: dispose}), updateShouldNotify: null, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = Provider.prototype;
    (Provider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      Provider.__.call(this, {key: key, delegate: new (SingleValueDelegateOfT()).new(value), updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = Provider.prototype;
    (Provider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      Provider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    const updateShouldNotify$ = Symbol("Provider.updateShouldNotify");
    const child$ = Symbol("Provider.child");
    Provider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      cloneWithChild: dart.fnType(src__provider_web.Provider$(T), [src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setLibraryUri(Provider, "package:provider_web/src/provider_web.dart");
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [T, T])),
      child: dart.finalFieldType(src__widgets__framework.Widget)
    }));
    return Provider;
  });
  src__provider_web.Provider = src__provider_web.Provider$();
  dart.defineLazy(src__provider_web.Provider, {
    /*src__provider_web.Provider.debugCheckInvalidValueType*/get debugCheckInvalidValueType() {
      return dart.fn((T, value) => {
        if (!dart.test(dart.fn(() => {
          if (src__foundation__change_notifier.Listenable.is(value) || async.Stream.is(value)) {
            dart.throw(src__foundation__assertions.FlutterError.new("Tried to use Provider with a subtype of Listenable/Stream (" + dart.str(dart.wrapType(T)) + ").\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen " + dart.str(dart.wrapType(T)) + " is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mecanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n"));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/provider_web.dart", 249, 12, "() {\n      if (value is Listenable || value is Stream) {\n        throw FlutterError('''\nTried to use Provider with a subtype of Listenable/Stream ($T).\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen $T is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mecanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n''');\n      }\n      return true;\n    }()");
      }, TToNull());
    },
    set debugCheckInvalidValueType(_) {}
  });
  dart.addTypeTests(src__provider_web.Provider, _is_Provider_default);
  src__provider_web.ProviderNotFoundError = class ProviderNotFoundError extends core.Error {
    get valueType() {
      return this[valueType$];
    }
    set valueType(value) {
      super.valueType = value;
    }
    get widgetType() {
      return this[widgetType$];
    }
    set widgetType(value) {
      super.widgetType = value;
    }
    toString() {
      return "Error: Could not find the correct Provider<" + dart.str(this.valueType) + "> above this " + dart.str(this.widgetType) + " Widget\n\nTo fix, please:\n\n  * Ensure the Provider<" + dart.str(this.valueType) + "> is an ancestor to this " + dart.str(this.widgetType) + " Widget\n  * Provide types to Provider<" + dart.str(this.valueType) + ">\n  * Provide types to Consumer<" + dart.str(this.valueType) + ">\n  * Provide types to Provider.of<" + dart.str(this.valueType) + ">()\n  * Always use package imports. Ex: `import 'package:my_app/my_code.dart';\n  * Ensure the correct `context` is being used.\n\nIf none of these solutions work, please file a bug at:\nhttps://github.com/rrousselGit/provider/issues\n";
    }
  };
  (src__provider_web.ProviderNotFoundError.new = function(valueType, widgetType) {
    this[valueType$] = valueType;
    this[widgetType$] = widgetType;
    src__provider_web.ProviderNotFoundError.__proto__.new.call(this);
    ;
  }).prototype = src__provider_web.ProviderNotFoundError.prototype;
  dart.addTypeTests(src__provider_web.ProviderNotFoundError);
  const valueType$ = Symbol("ProviderNotFoundError.valueType");
  const widgetType$ = Symbol("ProviderNotFoundError.widgetType");
  dart.setLibraryUri(src__provider_web.ProviderNotFoundError, "package:provider_web/src/provider_web.dart");
  dart.setFieldSignature(src__provider_web.ProviderNotFoundError, () => ({
    __proto__: dart.getFields(src__provider_web.ProviderNotFoundError.__proto__),
    valueType: dart.finalFieldType(core.Type),
    widgetType: dart.finalFieldType(core.Type)
  }));
  dart.defineExtensionMethods(src__provider_web.ProviderNotFoundError, ['toString']);
  src__provider_web._typeOf = function(T) {
    return dart.wrapType(T);
  };
  const _context = dart.privateName(src__delegate_widget, "_context");
  const _setState = dart.privateName(src__delegate_widget, "_setState");
  src__delegate_widget.StateDelegate = class StateDelegate extends core.Object {
    get context() {
      return this[_context];
    }
    get setState() {
      return this[_setState];
    }
    initDelegate() {
    }
    didUpdateDelegate(old) {
      src__delegate_widget.StateDelegate._check(old);
    }
    dispose() {
    }
  };
  (src__delegate_widget.StateDelegate.new = function() {
    this[_context] = null;
    this[_setState] = null;
    ;
  }).prototype = src__delegate_widget.StateDelegate.prototype;
  dart.addTypeTests(src__delegate_widget.StateDelegate);
  dart.setMethodSignature(src__delegate_widget.StateDelegate, () => ({
    __proto__: dart.getMethods(src__delegate_widget.StateDelegate.__proto__),
    initDelegate: dart.fnType(dart.void, []),
    didUpdateDelegate: dart.fnType(dart.void, [core.Object]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__delegate_widget.StateDelegate, () => ({
    __proto__: dart.getGetters(src__delegate_widget.StateDelegate.__proto__),
    context: src__widgets__framework.BuildContext,
    setState: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(src__delegate_widget.StateDelegate, "package:provider_web/src/delegate_widget.dart");
  dart.setFieldSignature(src__delegate_widget.StateDelegate, () => ({
    __proto__: dart.getFields(src__delegate_widget.StateDelegate.__proto__),
    [_context]: dart.fieldType(src__widgets__framework.BuildContext),
    [_setState]: dart.fieldType(dart.fnType(dart.void, [dart.fnType(dart.void, [])]))
  }));
  const _mountDelegate = dart.privateName(src__delegate_widget, "_mountDelegate");
  const _initDelegate = dart.privateName(src__delegate_widget, "_initDelegate");
  const _debugIsInitDelegate = dart.privateName(src__delegate_widget, "_debugIsInitDelegate");
  const _unmountDelegate = dart.privateName(src__delegate_widget, "_unmountDelegate");
  src__delegate_widget._DelegateWidgetState = class _DelegateWidgetState extends src__widgets__framework.State$(src__delegate_widget.DelegateWidget) {
    initState() {
      super.initState();
      this[_mountDelegate]();
      this[_initDelegate]();
    }
    [_initDelegate]() {
      if (!dart.test(dart.fn(() => {
        src__delegate_widget._DelegateElement.as(this.context)[_debugIsInitDelegate] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/delegate_widget.dart", 113, 12, "() {\n      (context as _DelegateElement)._debugIsInitDelegate = true;\n      return true;\n    }()");
      this.widget.delegate.initDelegate();
      if (!dart.test(dart.fn(() => {
        src__delegate_widget._DelegateElement.as(this.context)[_debugIsInitDelegate] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/delegate_widget.dart", 118, 12, "() {\n      (context as _DelegateElement)._debugIsInitDelegate = false;\n      return true;\n    }()");
    }
    [_mountDelegate]() {
      let t0;
      t0 = this.widget.delegate;
      t0[_context] = this.context;
      t0[_setState] = dart.bind(this, 'setState');
      t0;
    }
    [_unmountDelegate](delegate) {
      let t0;
      t0 = delegate;
      t0[_context] = null;
      t0[_setState] = null;
      t0;
    }
    didUpdateWidget(oldWidget) {
      src__delegate_widget.DelegateWidget._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.delegate, oldWidget.delegate)) {
        this[_mountDelegate]();
        if (!dart.equals(dart.runtimeType(this.widget.delegate), dart.runtimeType(oldWidget.delegate))) {
          oldWidget.delegate.dispose();
          this[_initDelegate]();
        } else {
          this.widget.delegate.didUpdateDelegate(oldWidget.delegate);
        }
        this[_unmountDelegate](oldWidget.delegate);
      }
    }
    build(context) {
      return this.widget.build(context);
    }
    dispose() {
      this.widget.delegate.dispose();
      this[_unmountDelegate](this.widget.delegate);
      super.dispose();
    }
  };
  (src__delegate_widget._DelegateWidgetState.new = function() {
    src__delegate_widget._DelegateWidgetState.__proto__.new.call(this);
    ;
  }).prototype = src__delegate_widget._DelegateWidgetState.prototype;
  dart.addTypeTests(src__delegate_widget._DelegateWidgetState);
  dart.setMethodSignature(src__delegate_widget._DelegateWidgetState, () => ({
    __proto__: dart.getMethods(src__delegate_widget._DelegateWidgetState.__proto__),
    [_initDelegate]: dart.fnType(dart.void, []),
    [_mountDelegate]: dart.fnType(dart.void, []),
    [_unmountDelegate]: dart.fnType(dart.void, [src__delegate_widget.StateDelegate]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__delegate_widget._DelegateWidgetState, "package:provider_web/src/delegate_widget.dart");
  src__delegate_widget._DelegateElement = class _DelegateElement extends src__widgets__framework.StatefulElement {
    get widget() {
      return src__delegate_widget.DelegateWidget.as(super.widget);
    }
    inheritFromElement(ancestor, opts) {
      let aspect = opts && 'aspect' in opts ? opts.aspect : null;
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_debugIsInitDelegate])) {
          let targetType = dart.runtimeType(ancestor.widget);
          dart.throw(src__foundation__assertions.FlutterError.new("inheritFromWidgetOfExactType(" + dart.str(targetType) + ") or inheritFromElement() was called before " + dart.str(dart.runtimeType(this.widget.delegate)) + ".initDelegate() completed.\n" + "When an inherited widget changes, for example if the value of Theme.of() changes, " + "its dependent widgets are rebuilt. If the dependent widget's reference to " + "the inherited widget is in a constructor or an initDelegate() method, " + "then the rebuilt dependent widget will not reflect the changes in the " + "inherited widget.\n" + "Typically references to inherited widgets should occur in widget build() methods. Alternatively, " + "initialization based on inherited widgets can be placed in the didChangeDependencies method, which " + "is called after initDelegate and whenever the dependencies change thereafter."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/delegate_widget.dart", 172, 12, "() {\n      if (_debugIsInitDelegate) {\n        final targetType = ancestor.widget.runtimeType;\n        // error copied from StatefulElement\n        throw FlutterError(\n            'inheritFromWidgetOfExactType($targetType) or inheritFromElement() was called before ${widget.delegate.runtimeType}.initDelegate() completed.\\n'\n            'When an inherited widget changes, for example if the value of Theme.of() changes, '\n            'its dependent widgets are rebuilt. If the dependent widget\\'s reference to '\n            'the inherited widget is in a constructor or an initDelegate() method, '\n            'then the rebuilt dependent widget will not reflect the changes in the '\n            'inherited widget.\\n'\n            'Typically references to inherited widgets should occur in widget build() methods. Alternatively, '\n            'initialization based on inherited widgets can be placed in the didChangeDependencies method, which '\n            'is called after initDelegate and whenever the dependencies change thereafter.');\n      }\n      return true;\n    }()");
      return super.inheritFromElement(ancestor, {aspect: aspect});
    }
  };
  (src__delegate_widget._DelegateElement.new = function(widget) {
    this[_debugIsInitDelegate] = false;
    src__delegate_widget._DelegateElement.__proto__.new.call(this, widget);
    ;
  }).prototype = src__delegate_widget._DelegateElement.prototype;
  dart.addTypeTests(src__delegate_widget._DelegateElement);
  dart.setGetterSignature(src__delegate_widget._DelegateElement, () => ({
    __proto__: dart.getGetters(src__delegate_widget._DelegateElement.__proto__),
    widget: src__delegate_widget.DelegateWidget
  }));
  dart.setLibraryUri(src__delegate_widget._DelegateElement, "package:provider_web/src/delegate_widget.dart");
  dart.setFieldSignature(src__delegate_widget._DelegateElement, () => ({
    __proto__: dart.getFields(src__delegate_widget._DelegateElement.__proto__),
    [_debugIsInitDelegate]: dart.fieldType(core.bool)
  }));
  const _is_ValueStateDelegate_default = Symbol('_is_ValueStateDelegate_default');
  src__delegate_widget.ValueStateDelegate$ = dart.generic(T => {
    class ValueStateDelegate extends src__delegate_widget.StateDelegate {}
    (ValueStateDelegate.new = function() {
      ValueStateDelegate.__proto__.new.call(this);
      ;
    }).prototype = ValueStateDelegate.prototype;
    dart.addTypeTests(ValueStateDelegate);
    ValueStateDelegate.prototype[_is_ValueStateDelegate_default] = true;
    dart.setLibraryUri(ValueStateDelegate, "package:provider_web/src/delegate_widget.dart");
    return ValueStateDelegate;
  });
  src__delegate_widget.ValueStateDelegate = src__delegate_widget.ValueStateDelegate$();
  dart.addTypeTests(src__delegate_widget.ValueStateDelegate, _is_ValueStateDelegate_default);
  const _is_SingleValueDelegate_default = Symbol('_is_SingleValueDelegate_default');
  src__delegate_widget.SingleValueDelegate$ = dart.generic(T => {
    class SingleValueDelegate extends src__delegate_widget.ValueStateDelegate$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
    }
    (SingleValueDelegate.new = function(value) {
      this[value$] = value;
      SingleValueDelegate.__proto__.new.call(this);
      ;
    }).prototype = SingleValueDelegate.prototype;
    dart.addTypeTests(SingleValueDelegate);
    SingleValueDelegate.prototype[_is_SingleValueDelegate_default] = true;
    const value$ = Symbol("SingleValueDelegate.value");
    dart.setLibraryUri(SingleValueDelegate, "package:provider_web/src/delegate_widget.dart");
    dart.setFieldSignature(SingleValueDelegate, () => ({
      __proto__: dart.getFields(SingleValueDelegate.__proto__),
      value: dart.finalFieldType(T)
    }));
    return SingleValueDelegate;
  });
  src__delegate_widget.SingleValueDelegate = src__delegate_widget.SingleValueDelegate$();
  dart.addTypeTests(src__delegate_widget.SingleValueDelegate, _is_SingleValueDelegate_default);
  const _value$ = dart.privateName(src__delegate_widget, "_value");
  const _builder$ = dart.privateName(src__delegate_widget, "_builder");
  const _dispose = dart.privateName(src__delegate_widget, "_dispose");
  const _is_BuilderStateDelegate_default = Symbol('_is_BuilderStateDelegate_default');
  src__delegate_widget.BuilderStateDelegate$ = dart.generic(T => {
    let BuilderStateDelegateOfT = () => (BuilderStateDelegateOfT = dart.constFn(src__delegate_widget.BuilderStateDelegate$(T)))();
    class BuilderStateDelegate extends src__delegate_widget.ValueStateDelegate$(T) {
      get value() {
        return this[_value$];
      }
      initDelegate() {
        super.initDelegate();
        this[_value$] = this[_builder$](this.context);
      }
      didUpdateDelegate(old) {
        BuilderStateDelegateOfT()._check(old);
        super.didUpdateDelegate(old);
        this[_value$] = old.value;
      }
      dispose() {
        let t0;
        t0 = this[_dispose];
        t0 == null ? null : t0(this.context, this.value);
        super.dispose();
      }
    }
    (BuilderStateDelegate.new = function(_builder, opts) {
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      this[_value$] = null;
      this[_builder$] = _builder;
      if (!(_builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/delegate_widget.dart", 223, 16, "_builder != null");
      this[_dispose] = dispose;
      BuilderStateDelegate.__proto__.new.call(this);
      ;
    }).prototype = BuilderStateDelegate.prototype;
    dart.addTypeTests(BuilderStateDelegate);
    BuilderStateDelegate.prototype[_is_BuilderStateDelegate_default] = true;
    dart.setGetterSignature(BuilderStateDelegate, () => ({
      __proto__: dart.getGetters(BuilderStateDelegate.__proto__),
      value: T
    }));
    dart.setLibraryUri(BuilderStateDelegate, "package:provider_web/src/delegate_widget.dart");
    dart.setFieldSignature(BuilderStateDelegate, () => ({
      __proto__: dart.getFields(BuilderStateDelegate.__proto__),
      [_builder$]: dart.finalFieldType(dart.fnType(T, [src__widgets__framework.BuildContext])),
      [_dispose]: dart.finalFieldType(dart.fnType(dart.void, [src__widgets__framework.BuildContext, T])),
      [_value$]: dart.fieldType(T)
    }));
    return BuilderStateDelegate;
  });
  src__delegate_widget.BuilderStateDelegate = src__delegate_widget.BuilderStateDelegate$();
  dart.addTypeTests(src__delegate_widget.BuilderStateDelegate, _is_BuilderStateDelegate_default);
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  const _is_ListenableProvider_default = Symbol('_is_ListenableProvider_default');
  src__listenable_provider.ListenableProvider$ = dart.generic(T => {
    let _BuilderListenableDelegateOfT = () => (_BuilderListenableDelegateOfT = dart.constFn(src__listenable_provider._BuilderListenableDelegate$(T)))();
    let _ValueListenableDelegateOfT = () => (_ValueListenableDelegateOfT = dart.constFn(src__listenable_provider._ValueListenableDelegate$(T)))();
    let ListenableProviderOfT = () => (ListenableProviderOfT = dart.constFn(src__listenable_provider.ListenableProvider$(T)))();
    let _ListenableDelegateMixinOfT = () => (_ListenableDelegateMixinOfT = dart.constFn(src__listenable_provider._ListenableDelegateMixin$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(src__provider_web.InheritedProvider$(T)))();
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    class ListenableProvider extends src__delegate_widget.ValueDelegateWidget$(T) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      cloneWithChild(child) {
        return new (ListenableProviderOfT()).__({key: this.key, delegate: _ListenableDelegateMixinOfT().as(this.delegate), child: child, $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 31, file: "org-dartlang-app:///packages/provider_web/src/listenable_provider.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 7, name: "key"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 7, name: "delegate"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      build(context) {
        let delegate = _ListenableDelegateMixinOfT().as(this.delegate);
        return new (InheritedProviderOfT()).new({value: delegate.value, updateShouldNotify: TAndTTobool()._check(delegate.updateShouldNotify), child: this.child, $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 12, file: "org-dartlang-app:///packages/provider_web/src/listenable_provider.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 7, name: "value"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 7, name: "updateShouldNotify"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (ListenableProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProvider.__.call(this, {key: key, delegate: new (_BuilderListenableDelegateOfT()).new(builder, {dispose: dispose}), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ListenableProvider.prototype;
    (ListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProvider.__.call(this, {key: key, delegate: new (_ValueListenableDelegateOfT()).new(value), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ListenableProvider.prototype;
    (ListenableProvider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[child$] = child;
      ListenableProvider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProvider.prototype;
    dart.addTypeTests(ListenableProvider);
    ListenableProvider.prototype[_is_ListenableProvider_default] = true;
    const child$ = Symbol("ListenableProvider.child");
    ListenableProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(ListenableProvider, () => ({
      __proto__: dart.getMethods(ListenableProvider.__proto__),
      cloneWithChild: dart.fnType(src__listenable_provider.ListenableProvider$(T), [src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setLibraryUri(ListenableProvider, "package:provider_web/src/listenable_provider.dart");
    dart.setFieldSignature(ListenableProvider, () => ({
      __proto__: dart.getFields(ListenableProvider.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget)
    }));
    return ListenableProvider;
  });
  src__listenable_provider.ListenableProvider = src__listenable_provider.ListenableProvider$();
  dart.addTypeTests(src__listenable_provider.ListenableProvider, _is_ListenableProvider_default);
  const _removeListener = dart.privateName(src__listenable_provider, "_removeListener");
  const _is__ListenableDelegateMixin_default = Symbol('_is__ListenableDelegateMixin_default');
  src__listenable_provider._ListenableDelegateMixin$ = dart.generic(T => {
    let _ListenableDelegateMixinOfT = () => (_ListenableDelegateMixinOfT = dart.constFn(src__listenable_provider._ListenableDelegateMixin$(T)))();
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    class _ListenableDelegateMixin extends src__delegate_widget.ValueStateDelegate$(T) {}
    _ListenableDelegateMixin[dart.mixinOn] = ValueStateDelegate => class _ListenableDelegateMixin extends ValueStateDelegate {
      initDelegate() {
        super.initDelegate();
        if (this.value != null) this.startListening(this.value);
      }
      didUpdateDelegate(old) {
        src__delegate_widget.StateDelegate._check(old);
        super.didUpdateDelegate(old);
        let delegate = _ListenableDelegateMixinOfT().as(old);
        this[_removeListener] = delegate[_removeListener];
        this.updateShouldNotify = TAndTTobool()._check(delegate.updateShouldNotify);
      }
      startListening(listenable) {
        T._check(listenable);
        let buildCount = 0;
        let setState = this.setState;
        let listener = dart.fn(() => setState(dart.fn(() => {
          let t0;
          t0 = buildCount;
          buildCount = t0 + 1;
          return t0;
        }, VoidToint())), VoidTovoid());
        let capturedBuildCount = buildCount;
        this.updateShouldNotify = dart.fn((_, __) => {
          let res = buildCount !== capturedBuildCount;
          capturedBuildCount = buildCount;
          return res;
        }, TAndTTobool());
        listenable.addListener(listener);
        this[_removeListener] = dart.fn(() => {
          listenable.removeListener(listener);
          this[_removeListener] = null;
          this.updateShouldNotify = null;
        }, VoidToNull());
      }
      dispose() {
        let t0;
        t0 = this[_removeListener];
        t0 == null ? null : t0();
        super.dispose();
      }
    };
    (_ListenableDelegateMixin[dart.mixinNew] = function() {
      this.updateShouldNotify = null;
      this[_removeListener] = null;
    }).prototype = _ListenableDelegateMixin.prototype;
    dart.addTypeTests(_ListenableDelegateMixin);
    _ListenableDelegateMixin.prototype[_is__ListenableDelegateMixin_default] = true;
    _ListenableDelegateMixin[dart.implements] = () => [src__delegate_widget.ValueStateDelegate$(T)];
    dart.setMethodSignature(_ListenableDelegateMixin, () => ({
      __proto__: dart.getMethods(_ListenableDelegateMixin.__proto__),
      startListening: dart.fnType(dart.void, [core.Object])
    }));
    dart.setLibraryUri(_ListenableDelegateMixin, "package:provider_web/src/listenable_provider.dart");
    dart.setFieldSignature(_ListenableDelegateMixin, () => ({
      __proto__: dart.getFields(_ListenableDelegateMixin.__proto__),
      updateShouldNotify: dart.fieldType(dart.fnType(core.bool, [T, T])),
      [_removeListener]: dart.fieldType(dart.fnType(dart.void, []))
    }));
    return _ListenableDelegateMixin;
  });
  src__listenable_provider._ListenableDelegateMixin = src__listenable_provider._ListenableDelegateMixin$();
  dart.addTypeTests(src__listenable_provider._ListenableDelegateMixin, _is__ListenableDelegateMixin_default);
  const _is__ValueListenableDelegate_default = Symbol('_is__ValueListenableDelegate_default');
  src__listenable_provider._ValueListenableDelegate$ = dart.generic(T => {
    let _ValueListenableDelegateOfT = () => (_ValueListenableDelegateOfT = dart.constFn(src__listenable_provider._ValueListenableDelegate$(T)))();
    const SingleValueDelegate__ListenableDelegateMixin$ = class SingleValueDelegate__ListenableDelegateMixin extends src__delegate_widget.SingleValueDelegate$(T) {};
    (SingleValueDelegate__ListenableDelegateMixin$.new = function(value) {
      src__listenable_provider._ListenableDelegateMixin$(T)[dart.mixinNew].call(this);
      SingleValueDelegate__ListenableDelegateMixin$.__proto__.new.call(this, value);
    }).prototype = SingleValueDelegate__ListenableDelegateMixin$.prototype;
    dart.applyMixin(SingleValueDelegate__ListenableDelegateMixin$, src__listenable_provider._ListenableDelegateMixin$(T));
    class _ValueListenableDelegate extends SingleValueDelegate__ListenableDelegateMixin$ {
      didUpdateDelegate(oldDelegate) {
        let t0;
        _ValueListenableDelegateOfT()._check(oldDelegate);
        super.didUpdateDelegate(oldDelegate);
        if (!dart.equals(oldDelegate.value, this.value)) {
          t0 = this[_removeListener];
          t0 == null ? null : t0();
          if (this.value != null) this.startListening(this.value);
        }
      }
    }
    (_ValueListenableDelegate.new = function(value) {
      _ValueListenableDelegate.__proto__.new.call(this, value);
      ;
    }).prototype = _ValueListenableDelegate.prototype;
    dart.addTypeTests(_ValueListenableDelegate);
    _ValueListenableDelegate.prototype[_is__ValueListenableDelegate_default] = true;
    dart.setLibraryUri(_ValueListenableDelegate, "package:provider_web/src/listenable_provider.dart");
    return _ValueListenableDelegate;
  });
  src__listenable_provider._ValueListenableDelegate = src__listenable_provider._ValueListenableDelegate$();
  dart.addTypeTests(src__listenable_provider._ValueListenableDelegate, _is__ValueListenableDelegate_default);
  const _is__BuilderListenableDelegate_default = Symbol('_is__BuilderListenableDelegate_default');
  src__listenable_provider._BuilderListenableDelegate$ = dart.generic(T => {
    const BuilderStateDelegate__ListenableDelegateMixin$ = class BuilderStateDelegate__ListenableDelegateMixin extends src__delegate_widget.BuilderStateDelegate$(T) {};
    (BuilderStateDelegate__ListenableDelegateMixin$.new = function(_builder, opts) {
      src__listenable_provider._ListenableDelegateMixin$(T)[dart.mixinNew].call(this);
      BuilderStateDelegate__ListenableDelegateMixin$.__proto__.new.call(this, _builder, opts);
    }).prototype = BuilderStateDelegate__ListenableDelegateMixin$.prototype;
    dart.applyMixin(BuilderStateDelegate__ListenableDelegateMixin$, src__listenable_provider._ListenableDelegateMixin$(T));
    class _BuilderListenableDelegate extends BuilderStateDelegate__ListenableDelegateMixin$ {}
    (_BuilderListenableDelegate.new = function(builder, opts) {
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      _BuilderListenableDelegate.__proto__.new.call(this, builder, {dispose: dispose});
      ;
    }).prototype = _BuilderListenableDelegate.prototype;
    dart.addTypeTests(_BuilderListenableDelegate);
    _BuilderListenableDelegate.prototype[_is__BuilderListenableDelegate_default] = true;
    dart.setLibraryUri(_BuilderListenableDelegate, "package:provider_web/src/listenable_provider.dart");
    return _BuilderListenableDelegate;
  });
  src__listenable_provider._BuilderListenableDelegate = src__listenable_provider._BuilderListenableDelegate$();
  dart.addTypeTests(src__listenable_provider._BuilderListenableDelegate, _is__BuilderListenableDelegate_default);
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  src__proxy_provider.ProxyProviderWidget = class ProxyProviderWidget extends src__widgets__framework.StatefulWidget {
    createElement() {
      return new src__proxy_provider.ProxyProviderElement.new(this);
    }
  };
  (src__proxy_provider.ProxyProviderWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    src__proxy_provider.ProxyProviderWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__proxy_provider.ProxyProviderWidget.prototype;
  dart.addTypeTests(src__proxy_provider.ProxyProviderWidget);
  dart.setMethodSignature(src__proxy_provider.ProxyProviderWidget, () => ({
    __proto__: dart.getMethods(src__proxy_provider.ProxyProviderWidget.__proto__),
    createElement: dart.fnType(src__proxy_provider.ProxyProviderElement, [])
  }));
  dart.setLibraryUri(src__proxy_provider.ProxyProviderWidget, "package:provider_web/src/proxy_provider.dart");
  const _is_ProxyProviderBase_default = Symbol('_is_ProxyProviderBase_default');
  src__proxy_provider.ProxyProviderBase$ = dart.generic(R => {
    let _ProxyProviderStateOfR = () => (_ProxyProviderStateOfR = dart.constFn(src__proxy_provider._ProxyProviderState$(R)))();
    class ProxyProviderBase extends src__proxy_provider.ProxyProviderWidget {
      get initialBuilder() {
        return this[initialBuilder$];
      }
      set initialBuilder(value) {
        super.initialBuilder = value;
      }
      get dispose() {
        return this[dispose$];
      }
      set dispose(value) {
        super.dispose = value;
      }
      createState() {
        return new (_ProxyProviderStateOfR()).new();
      }
    }
    (ProxyProviderBase.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[initialBuilder$] = initialBuilder;
      this[dispose$] = dispose;
      ProxyProviderBase.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProviderBase.prototype;
    dart.addTypeTests(ProxyProviderBase);
    ProxyProviderBase.prototype[_is_ProxyProviderBase_default] = true;
    const initialBuilder$ = Symbol("ProxyProviderBase.initialBuilder");
    const dispose$ = Symbol("ProxyProviderBase.dispose");
    dart.setMethodSignature(ProxyProviderBase, () => ({
      __proto__: dart.getMethods(ProxyProviderBase.__proto__),
      createState: dart.fnType(src__proxy_provider._ProxyProviderState$(R), [])
    }));
    dart.setLibraryUri(ProxyProviderBase, "package:provider_web/src/proxy_provider.dart");
    dart.setFieldSignature(ProxyProviderBase, () => ({
      __proto__: dart.getFields(ProxyProviderBase.__proto__),
      initialBuilder: dart.finalFieldType(dart.fnType(R, [src__widgets__framework.BuildContext])),
      dispose: dart.finalFieldType(dart.fnType(dart.void, [src__widgets__framework.BuildContext, R]))
    }));
    return ProxyProviderBase;
  });
  src__proxy_provider.ProxyProviderBase = src__proxy_provider.ProxyProviderBase$();
  dart.addTypeTests(src__proxy_provider.ProxyProviderBase, _is_ProxyProviderBase_default);
  const _is__NumericProxyProvider_default = Symbol('_is__NumericProxyProvider_default');
  src__listenable_provider._NumericProxyProvider$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let _NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = () => (_NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = dart.constFn(src__listenable_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R)))();
    let ListenableProviderOfR = () => (ListenableProviderOfR = dart.constFn(src__listenable_provider.ListenableProvider$(R)))();
    class _NumericProxyProvider extends src__proxy_provider.ProxyProviderBase$(R) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      cloneWithChild(child) {
        return new (_NumericProxyProviderOfT$T2$T3$T4$T5$T6$R()).new({key: this.key, initialBuilder: this.initialBuilder, builder: this.builder, dispose: this.dispose, child: child, $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 183, column: 12, file: "org-dartlang-app:///packages/provider_web/src/listenable_provider.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 184, column: 7, name: "key"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 185, column: 7, name: "initialBuilder"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 186, column: 7, name: "builder"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 187, column: 7, name: "dispose"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 188, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      build(context, value) {
        R._check(value);
        return new (ListenableProviderOfR()).value({value: value, child: this.child, $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 194, column: 5, file: "org-dartlang-app:///packages/provider_web/src/listenable_provider.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 195, column: 7, name: "value"}))), const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      didChangeDependencies(context, previous) {
        R._check(previous);
        let arguments$ = [context, src__provider_web.Provider.of(T, context)];
        if (!dart.wrapType(T2)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T2, context));
        if (!dart.wrapType(T3)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T3, context));
        if (!dart.wrapType(T4)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T4, context));
        if (!dart.wrapType(T5)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T5, context));
        if (!dart.wrapType(T6)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T6, context));
        arguments$[$add](previous);
        return R.as(core.Function.apply(this.builder, arguments$));
      }
    }
    (_NumericProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/listenable_provider.dart", 165, 16, "builder != null");
      _NumericProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, dispose: dispose, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _NumericProxyProvider.prototype;
    dart.addTypeTests(_NumericProxyProvider);
    _NumericProxyProvider.prototype[_is__NumericProxyProvider_default] = true;
    const child$ = Symbol("_NumericProxyProvider.child");
    const builder$ = Symbol("_NumericProxyProvider.builder");
    _NumericProxyProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(_NumericProxyProvider, () => ({
      __proto__: dart.getMethods(_NumericProxyProvider.__proto__),
      cloneWithChild: dart.fnType(src__listenable_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R), [src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.Object]),
      didChangeDependencies: dart.fnType(R, [src__widgets__framework.BuildContext, core.Object])
    }));
    dart.setLibraryUri(_NumericProxyProvider, "package:provider_web/src/listenable_provider.dart");
    dart.setFieldSignature(_NumericProxyProvider, () => ({
      __proto__: dart.getFields(_NumericProxyProvider.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(core.Function)
    }));
    return _NumericProxyProvider;
  });
  src__listenable_provider._NumericProxyProvider = src__listenable_provider._NumericProxyProvider$();
  dart.addTypeTests(src__listenable_provider._NumericProxyProvider, _is__NumericProxyProvider_default);
  src__proxy_provider.Void = class Void extends core.Object {};
  (src__proxy_provider.Void.new = function() {
    ;
  }).prototype = src__proxy_provider.Void.prototype;
  dart.addTypeTests(src__proxy_provider.Void);
  dart.setLibraryUri(src__proxy_provider.Void, "package:provider_web/src/proxy_provider.dart");
  const _is_ListenableProxyProvider_default = Symbol('_is_ListenableProxyProvider_default');
  src__listenable_provider.ListenableProxyProvider$ = dart.generic((T, R) => {
    let BuildContextAndTAndRToR = () => (BuildContextAndTAndRToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, R])))();
    class ListenableProxyProvider extends src__listenable_provider._NumericProxyProvider$(T, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndRToR().as(super.builder);
      }
    }
    (ListenableProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider.prototype;
    dart.addTypeTests(ListenableProxyProvider);
    ListenableProxyProvider.prototype[_is_ListenableProxyProvider_default] = true;
    dart.setGetterSignature(ListenableProxyProvider, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider, "package:provider_web/src/listenable_provider.dart");
    return ListenableProxyProvider;
  });
  src__listenable_provider.ListenableProxyProvider = src__listenable_provider.ListenableProxyProvider$();
  dart.addTypeTests(src__listenable_provider.ListenableProxyProvider, _is_ListenableProxyProvider_default);
  const _is_ListenableProxyProvider2_default = Symbol('_is_ListenableProxyProvider2_default');
  src__listenable_provider.ListenableProxyProvider2$ = dart.generic((T, T2, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, R])))();
    class ListenableProxyProvider2 extends src__listenable_provider._NumericProxyProvider$(T, T2, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider2.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider2.prototype;
    dart.addTypeTests(ListenableProxyProvider2);
    ListenableProxyProvider2.prototype[_is_ListenableProxyProvider2_default] = true;
    dart.setGetterSignature(ListenableProxyProvider2, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider2.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider2, "package:provider_web/src/listenable_provider.dart");
    return ListenableProxyProvider2;
  });
  src__listenable_provider.ListenableProxyProvider2 = src__listenable_provider.ListenableProxyProvider2$();
  dart.addTypeTests(src__listenable_provider.ListenableProxyProvider2, _is_ListenableProxyProvider2_default);
  const _is_ListenableProxyProvider3_default = Symbol('_is_ListenableProxyProvider3_default');
  src__listenable_provider.ListenableProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, R])))();
    class ListenableProxyProvider3 extends src__listenable_provider._NumericProxyProvider$(T, T2, T3, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider3.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider3.prototype;
    dart.addTypeTests(ListenableProxyProvider3);
    ListenableProxyProvider3.prototype[_is_ListenableProxyProvider3_default] = true;
    dart.setGetterSignature(ListenableProxyProvider3, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider3.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider3, "package:provider_web/src/listenable_provider.dart");
    return ListenableProxyProvider3;
  });
  src__listenable_provider.ListenableProxyProvider3 = src__listenable_provider.ListenableProxyProvider3$();
  dart.addTypeTests(src__listenable_provider.ListenableProxyProvider3, _is_ListenableProxyProvider3_default);
  const _is_ListenableProxyProvider4_default = Symbol('_is_ListenableProxyProvider4_default');
  src__listenable_provider.ListenableProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, R])))();
    class ListenableProxyProvider4 extends src__listenable_provider._NumericProxyProvider$(T, T2, T3, T4, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider4.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider4.prototype;
    dart.addTypeTests(ListenableProxyProvider4);
    ListenableProxyProvider4.prototype[_is_ListenableProxyProvider4_default] = true;
    dart.setGetterSignature(ListenableProxyProvider4, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider4.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider4, "package:provider_web/src/listenable_provider.dart");
    return ListenableProxyProvider4;
  });
  src__listenable_provider.ListenableProxyProvider4 = src__listenable_provider.ListenableProxyProvider4$();
  dart.addTypeTests(src__listenable_provider.ListenableProxyProvider4, _is_ListenableProxyProvider4_default);
  const _is_ListenableProxyProvider5_default = Symbol('_is_ListenableProxyProvider5_default');
  src__listenable_provider.ListenableProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, R])))();
    class ListenableProxyProvider5 extends src__listenable_provider._NumericProxyProvider$(T, T2, T3, T4, T5, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider5.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider5.prototype;
    dart.addTypeTests(ListenableProxyProvider5);
    ListenableProxyProvider5.prototype[_is_ListenableProxyProvider5_default] = true;
    dart.setGetterSignature(ListenableProxyProvider5, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider5.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider5, "package:provider_web/src/listenable_provider.dart");
    return ListenableProxyProvider5;
  });
  src__listenable_provider.ListenableProxyProvider5 = src__listenable_provider.ListenableProxyProvider5$();
  dart.addTypeTests(src__listenable_provider.ListenableProxyProvider5, _is_ListenableProxyProvider5_default);
  const _is_ListenableProxyProvider6_default = Symbol('_is_ListenableProxyProvider6_default');
  src__listenable_provider.ListenableProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, T6, R])))();
    class ListenableProxyProvider6 extends src__listenable_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider6.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider6.prototype;
    dart.addTypeTests(ListenableProxyProvider6);
    ListenableProxyProvider6.prototype[_is_ListenableProxyProvider6_default] = true;
    dart.setGetterSignature(ListenableProxyProvider6, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider6.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, T6, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider6, "package:provider_web/src/listenable_provider.dart");
    return ListenableProxyProvider6;
  });
  src__listenable_provider.ListenableProxyProvider6 = src__listenable_provider.ListenableProxyProvider6$();
  dart.addTypeTests(src__listenable_provider.ListenableProxyProvider6, _is_ListenableProxyProvider6_default);
  const _is_ProxyProviderState_default = Symbol('_is_ProxyProviderState_default');
  src__proxy_provider.ProxyProviderState$ = dart.generic(T => {
    class ProxyProviderState extends src__widgets__framework.State$(T) {
      didUpdateDependencies() {
      }
    }
    (ProxyProviderState.new = function() {
      ProxyProviderState.__proto__.new.call(this);
      ;
    }).prototype = ProxyProviderState.prototype;
    dart.addTypeTests(ProxyProviderState);
    ProxyProviderState.prototype[_is_ProxyProviderState_default] = true;
    dart.setMethodSignature(ProxyProviderState, () => ({
      __proto__: dart.getMethods(ProxyProviderState.__proto__),
      didUpdateDependencies: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ProxyProviderState, "package:provider_web/src/proxy_provider.dart");
    return ProxyProviderState;
  });
  src__proxy_provider.ProxyProviderState = src__proxy_provider.ProxyProviderState$();
  dart.addTypeTests(src__proxy_provider.ProxyProviderState, _is_ProxyProviderState_default);
  const _didChangeDependencies = dart.privateName(src__proxy_provider, "_didChangeDependencies");
  src__proxy_provider.ProxyProviderElement = class ProxyProviderElement extends src__widgets__framework.StatefulElement {
    get widget() {
      return src__proxy_provider.ProxyProviderWidget.as(super.widget);
    }
    get state() {
      return ProxyProviderStateOfProxyProviderWidget().as(super.state);
    }
    didChangeDependencies() {
      this[_didChangeDependencies] = true;
      super.didChangeDependencies();
    }
    build() {
      if (dart.test(this[_didChangeDependencies])) {
        this[_didChangeDependencies] = false;
        this.state.didUpdateDependencies();
      }
      return super.build();
    }
  };
  (src__proxy_provider.ProxyProviderElement.new = function(widget) {
    this[_didChangeDependencies] = true;
    src__proxy_provider.ProxyProviderElement.__proto__.new.call(this, widget);
    ;
  }).prototype = src__proxy_provider.ProxyProviderElement.prototype;
  dart.addTypeTests(src__proxy_provider.ProxyProviderElement);
  dart.setGetterSignature(src__proxy_provider.ProxyProviderElement, () => ({
    __proto__: dart.getGetters(src__proxy_provider.ProxyProviderElement.__proto__),
    widget: src__proxy_provider.ProxyProviderWidget,
    state: src__proxy_provider.ProxyProviderState$(src__proxy_provider.ProxyProviderWidget)
  }));
  dart.setLibraryUri(src__proxy_provider.ProxyProviderElement, "package:provider_web/src/proxy_provider.dart");
  dart.setFieldSignature(src__proxy_provider.ProxyProviderElement, () => ({
    __proto__: dart.getFields(src__proxy_provider.ProxyProviderElement.__proto__),
    [_didChangeDependencies]: dart.fieldType(core.bool)
  }));
  const _value$0 = dart.privateName(src__proxy_provider, "_value");
  const _is__ProxyProviderState_default = Symbol('_is__ProxyProviderState_default');
  src__proxy_provider._ProxyProviderState$ = dart.generic(R => {
    let BuildContextAndRTovoid = () => (BuildContextAndRTovoid = dart.constFn(dart.fnType(dart.void, [src__widgets__framework.BuildContext, R])))();
    class _ProxyProviderState extends src__proxy_provider.ProxyProviderState$(src__proxy_provider.ProxyProviderBase$(R)) {
      initState() {
        let t0;
        super.initState();
        this[_value$0] = (t0 = this.widget.initialBuilder, t0 == null ? null : t0(this.context));
      }
      didUpdateDependencies() {
        super.didUpdateDependencies();
        this[_value$0] = this.widget.didChangeDependencies(this.context, this[_value$0]);
      }
      build(context) {
        return this.widget.build(context, this[_value$0]);
      }
      dispose() {
        if (BuildContextAndRTovoid()._check(this.widget.dispose) != null) {
          BuildContextAndRTovoid()._check(this.widget.dispose)(this.context, this[_value$0]);
        }
        super.dispose();
      }
    }
    (_ProxyProviderState.new = function() {
      this[_value$0] = null;
      _ProxyProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ProxyProviderState.prototype;
    dart.addTypeTests(_ProxyProviderState);
    _ProxyProviderState.prototype[_is__ProxyProviderState_default] = true;
    dart.setMethodSignature(_ProxyProviderState, () => ({
      __proto__: dart.getMethods(_ProxyProviderState.__proto__),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setLibraryUri(_ProxyProviderState, "package:provider_web/src/proxy_provider.dart");
    dart.setFieldSignature(_ProxyProviderState, () => ({
      __proto__: dart.getFields(_ProxyProviderState.__proto__),
      [_value$0]: dart.fieldType(R)
    }));
    return _ProxyProviderState;
  });
  src__proxy_provider._ProxyProviderState = src__proxy_provider._ProxyProviderState$();
  dart.addTypeTests(src__proxy_provider._ProxyProviderState, _is__ProxyProviderState_default);
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
  const _is_NumericProxyProvider_default = Symbol('_is_NumericProxyProvider_default');
  src__proxy_provider.NumericProxyProvider$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = () => (NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = dart.constFn(src__proxy_provider.NumericProxyProvider$(T, T2, T3, T4, T5, T6, R)))();
    let InheritedProviderOfR = () => (InheritedProviderOfR = dart.constFn(src__provider_web.InheritedProvider$(R)))();
    class NumericProxyProvider extends src__proxy_provider.ProxyProviderBase$(R) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      cloneWithChild(child) {
        return new (NumericProxyProviderOfT$T2$T3$T4$T5$T6$R()).new({key: this.key, initialBuilder: this.initialBuilder, builder: this.builder, updateShouldNotify: this.updateShouldNotify, dispose: this.dispose, child: child, $creationLocationd_0dea112b090073317d4: const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 218, column: 12, file: "org-dartlang-app:///packages/provider_web/src/proxy_provider.dart", parameterLocations: const$58 || (const$58 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 7, name: "key"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 7, name: "initialBuilder"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 7, name: "builder"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 7, name: "updateShouldNotify"}))), const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 223, column: 7, name: "dispose"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 224, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      build(context, value) {
        R._check(value);
        if (!dart.test(dart.fn(() => {
          let t0;
          t0 = src__provider_web.Provider.debugCheckInvalidValueType;
          t0 == null ? null : t0(R, value);
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/proxy_provider.dart", 230, 12, "() {\n      Provider.debugCheckInvalidValueType?.call(value);\n      return true;\n    }()");
        return new (InheritedProviderOfR()).new({value: value, updateShouldNotify: this.updateShouldNotify, child: this.child, $creationLocationd_0dea112b090073317d4: const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 234, column: 12, file: "org-dartlang-app:///packages/provider_web/src/proxy_provider.dart", parameterLocations: const$63 || (const$63 = dart.constList([const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 235, column: 7, name: "value"}))), const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 236, column: 7, name: "updateShouldNotify"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      didChangeDependencies(context, previous) {
        R._check(previous);
        let arguments$ = [context, src__provider_web.Provider.of(T, context)];
        if (!dart.wrapType(T2)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T2, context));
        if (!dart.wrapType(T3)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T3, context));
        if (!dart.wrapType(T4)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T4, context));
        if (!dart.wrapType(T5)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T5, context));
        if (!dart.wrapType(T6)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T6, context));
        arguments$[$add](previous);
        return R.as(core.Function.apply(this.builder, arguments$));
      }
    }
    (NumericProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/proxy_provider.dart", 189, 16, "builder != null");
      NumericProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, dispose: dispose, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = NumericProxyProvider.prototype;
    dart.addTypeTests(NumericProxyProvider);
    NumericProxyProvider.prototype[_is_NumericProxyProvider_default] = true;
    const child$ = Symbol("NumericProxyProvider.child");
    const builder$ = Symbol("NumericProxyProvider.builder");
    const updateShouldNotify$ = Symbol("NumericProxyProvider.updateShouldNotify");
    NumericProxyProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(NumericProxyProvider, () => ({
      __proto__: dart.getMethods(NumericProxyProvider.__proto__),
      cloneWithChild: dart.fnType(src__proxy_provider.NumericProxyProvider$(T, T2, T3, T4, T5, T6, R), [src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.Object]),
      didChangeDependencies: dart.fnType(R, [src__widgets__framework.BuildContext, core.Object])
    }));
    dart.setLibraryUri(NumericProxyProvider, "package:provider_web/src/proxy_provider.dart");
    dart.setFieldSignature(NumericProxyProvider, () => ({
      __proto__: dart.getFields(NumericProxyProvider.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(core.Function),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [R, R]))
    }));
    return NumericProxyProvider;
  });
  src__proxy_provider.NumericProxyProvider = src__proxy_provider.NumericProxyProvider$();
  dart.addTypeTests(src__proxy_provider.NumericProxyProvider, _is_NumericProxyProvider_default);
  const _is_ProxyProvider_default = Symbol('_is_ProxyProvider_default');
  src__proxy_provider.ProxyProvider$ = dart.generic((T, R) => {
    let BuildContextAndTAndRToR = () => (BuildContextAndTAndRToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, R])))();
    class ProxyProvider extends src__proxy_provider.NumericProxyProvider$(T, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndRToR().as(super.builder);
      }
    }
    (ProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider.prototype;
    dart.addTypeTests(ProxyProvider);
    ProxyProvider.prototype[_is_ProxyProvider_default] = true;
    dart.setGetterSignature(ProxyProvider, () => ({
      __proto__: dart.getGetters(ProxyProvider.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, R])
    }));
    dart.setLibraryUri(ProxyProvider, "package:provider_web/src/proxy_provider.dart");
    return ProxyProvider;
  });
  src__proxy_provider.ProxyProvider = src__proxy_provider.ProxyProvider$();
  dart.addTypeTests(src__proxy_provider.ProxyProvider, _is_ProxyProvider_default);
  const _is_ProxyProvider2_default = Symbol('_is_ProxyProvider2_default');
  src__proxy_provider.ProxyProvider2$ = dart.generic((T, T2, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, R])))();
    class ProxyProvider2 extends src__proxy_provider.NumericProxyProvider$(T, T2, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider2.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider2.prototype;
    dart.addTypeTests(ProxyProvider2);
    ProxyProvider2.prototype[_is_ProxyProvider2_default] = true;
    dart.setGetterSignature(ProxyProvider2, () => ({
      __proto__: dart.getGetters(ProxyProvider2.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, R])
    }));
    dart.setLibraryUri(ProxyProvider2, "package:provider_web/src/proxy_provider.dart");
    return ProxyProvider2;
  });
  src__proxy_provider.ProxyProvider2 = src__proxy_provider.ProxyProvider2$();
  dart.addTypeTests(src__proxy_provider.ProxyProvider2, _is_ProxyProvider2_default);
  const _is_ProxyProvider3_default = Symbol('_is_ProxyProvider3_default');
  src__proxy_provider.ProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, R])))();
    class ProxyProvider3 extends src__proxy_provider.NumericProxyProvider$(T, T2, T3, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider3.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider3.prototype;
    dart.addTypeTests(ProxyProvider3);
    ProxyProvider3.prototype[_is_ProxyProvider3_default] = true;
    dart.setGetterSignature(ProxyProvider3, () => ({
      __proto__: dart.getGetters(ProxyProvider3.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, R])
    }));
    dart.setLibraryUri(ProxyProvider3, "package:provider_web/src/proxy_provider.dart");
    return ProxyProvider3;
  });
  src__proxy_provider.ProxyProvider3 = src__proxy_provider.ProxyProvider3$();
  dart.addTypeTests(src__proxy_provider.ProxyProvider3, _is_ProxyProvider3_default);
  const _is_ProxyProvider4_default = Symbol('_is_ProxyProvider4_default');
  src__proxy_provider.ProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, R])))();
    class ProxyProvider4 extends src__proxy_provider.NumericProxyProvider$(T, T2, T3, T4, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider4.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider4.prototype;
    dart.addTypeTests(ProxyProvider4);
    ProxyProvider4.prototype[_is_ProxyProvider4_default] = true;
    dart.setGetterSignature(ProxyProvider4, () => ({
      __proto__: dart.getGetters(ProxyProvider4.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, R])
    }));
    dart.setLibraryUri(ProxyProvider4, "package:provider_web/src/proxy_provider.dart");
    return ProxyProvider4;
  });
  src__proxy_provider.ProxyProvider4 = src__proxy_provider.ProxyProvider4$();
  dart.addTypeTests(src__proxy_provider.ProxyProvider4, _is_ProxyProvider4_default);
  const _is_ProxyProvider5_default = Symbol('_is_ProxyProvider5_default');
  src__proxy_provider.ProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, R])))();
    class ProxyProvider5 extends src__proxy_provider.NumericProxyProvider$(T, T2, T3, T4, T5, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider5.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider5.prototype;
    dart.addTypeTests(ProxyProvider5);
    ProxyProvider5.prototype[_is_ProxyProvider5_default] = true;
    dart.setGetterSignature(ProxyProvider5, () => ({
      __proto__: dart.getGetters(ProxyProvider5.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, R])
    }));
    dart.setLibraryUri(ProxyProvider5, "package:provider_web/src/proxy_provider.dart");
    return ProxyProvider5;
  });
  src__proxy_provider.ProxyProvider5 = src__proxy_provider.ProxyProvider5$();
  dart.addTypeTests(src__proxy_provider.ProxyProvider5, _is_ProxyProvider5_default);
  const _is_ProxyProvider6_default = Symbol('_is_ProxyProvider6_default');
  src__proxy_provider.ProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, T6, R])))();
    class ProxyProvider6 extends src__proxy_provider.NumericProxyProvider$(T, T2, T3, T4, T5, T6, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider6.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider6.prototype;
    dart.addTypeTests(ProxyProvider6);
    ProxyProvider6.prototype[_is_ProxyProvider6_default] = true;
    dart.setGetterSignature(ProxyProvider6, () => ({
      __proto__: dart.getGetters(ProxyProvider6.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, T6, R])
    }));
    dart.setLibraryUri(ProxyProvider6, "package:provider_web/src/proxy_provider.dart");
    return ProxyProvider6;
  });
  src__proxy_provider.ProxyProvider6 = src__proxy_provider.ProxyProvider6$();
  dart.addTypeTests(src__proxy_provider.ProxyProvider6, _is_ProxyProvider6_default);
  const _is_ChangeNotifierProvider_default = Symbol('_is_ChangeNotifierProvider_default');
  src__change_notifier_provider.ChangeNotifierProvider$ = dart.generic(T => {
    class ChangeNotifierProvider extends src__listenable_provider.ListenableProvider$(T) {
      static _disposer(context, notifier) {
        let t0;
        t0 = notifier;
        return t0 == null ? null : t0.dispose();
      }
    }
    (ChangeNotifierProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProvider.__proto__.new.call(this, {key: key, builder: builder, dispose: dart.fn(src__change_notifier_provider.ChangeNotifierProvider._disposer, BuildContextAndChangeNotifierTovoid()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    (ChangeNotifierProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProvider.__proto__.value.call(this, {key: key, value: value, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    dart.addTypeTests(ChangeNotifierProvider);
    ChangeNotifierProvider.prototype[_is_ChangeNotifierProvider_default] = true;
    ChangeNotifierProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setLibraryUri(ChangeNotifierProvider, "package:provider_web/src/change_notifier_provider.dart");
    return ChangeNotifierProvider;
  });
  src__change_notifier_provider.ChangeNotifierProvider = src__change_notifier_provider.ChangeNotifierProvider$();
  dart.addTypeTests(src__change_notifier_provider.ChangeNotifierProvider, _is_ChangeNotifierProvider_default);
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  const _is__NumericProxyProvider_default$ = Symbol('_is__NumericProxyProvider_default');
  src__change_notifier_provider._NumericProxyProvider$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let _NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = () => (_NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = dart.constFn(src__change_notifier_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R)))();
    let ChangeNotifierProviderOfR = () => (ChangeNotifierProviderOfR = dart.constFn(src__change_notifier_provider.ChangeNotifierProvider$(R)))();
    class _NumericProxyProvider extends src__proxy_provider.ProxyProviderBase$(R) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      cloneWithChild(child) {
        return new (_NumericProxyProviderOfT$T2$T3$T4$T5$T6$R()).new({key: this.key, initialBuilder: this.initialBuilder, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 12, file: "org-dartlang-app:///packages/provider_web/src/change_notifier_provider.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 7, name: "key"}))), const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 7, name: "initialBuilder"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 7, name: "builder"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      build(context, value) {
        R._check(value);
        return new (ChangeNotifierProviderOfR()).value({value: value, child: this.child, $creationLocationd_0dea112b090073317d4: const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 5, file: "org-dartlang-app:///packages/provider_web/src/change_notifier_provider.dart", parameterLocations: const$73 || (const$73 = dart.constList([const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 7, name: "value"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      didChangeDependencies(context, previous) {
        R._check(previous);
        let arguments$ = [context, src__provider_web.Provider.of(T, context)];
        if (!dart.wrapType(T2)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T2, context));
        if (!dart.wrapType(T3)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T3, context));
        if (!dart.wrapType(T4)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T4, context));
        if (!dart.wrapType(T5)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T5, context));
        if (!dart.wrapType(T6)[$_equals](dart.wrapType(src__proxy_provider.Void))) arguments$[$add](src__provider_web.Provider.of(T6, context));
        arguments$[$add](previous);
        return R.as(core.Function.apply(this.builder, arguments$));
      }
    }
    (_NumericProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/change_notifier_provider.dart", 45, 16, "builder != null");
      _NumericProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, dispose: dart.fn(src__change_notifier_provider.ChangeNotifierProvider._disposer, BuildContextAndChangeNotifierTovoid()), $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _NumericProxyProvider.prototype;
    dart.addTypeTests(_NumericProxyProvider);
    _NumericProxyProvider.prototype[_is__NumericProxyProvider_default$] = true;
    const child$ = Symbol("_NumericProxyProvider.child");
    const builder$ = Symbol("_NumericProxyProvider.builder");
    _NumericProxyProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(_NumericProxyProvider, () => ({
      __proto__: dart.getMethods(_NumericProxyProvider.__proto__),
      cloneWithChild: dart.fnType(src__change_notifier_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R), [src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.Object]),
      didChangeDependencies: dart.fnType(R, [src__widgets__framework.BuildContext, core.Object])
    }));
    dart.setLibraryUri(_NumericProxyProvider, "package:provider_web/src/change_notifier_provider.dart");
    dart.setFieldSignature(_NumericProxyProvider, () => ({
      __proto__: dart.getFields(_NumericProxyProvider.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(core.Function)
    }));
    return _NumericProxyProvider;
  });
  src__change_notifier_provider._NumericProxyProvider = src__change_notifier_provider._NumericProxyProvider$();
  dart.addTypeTests(src__change_notifier_provider._NumericProxyProvider, _is__NumericProxyProvider_default$);
  const _is_ChangeNotifierProxyProvider_default = Symbol('_is_ChangeNotifierProxyProvider_default');
  src__change_notifier_provider.ChangeNotifierProxyProvider$ = dart.generic((T, R) => {
    let BuildContextAndTAndRToR = () => (BuildContextAndTAndRToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, R])))();
    class ChangeNotifierProxyProvider extends src__change_notifier_provider._NumericProxyProvider$(T, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndRToR().as(super.builder);
      }
    }
    (ChangeNotifierProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider);
    ChangeNotifierProxyProvider.prototype[_is_ChangeNotifierProxyProvider_default] = true;
    dart.setGetterSignature(ChangeNotifierProxyProvider, () => ({
      __proto__: dart.getGetters(ChangeNotifierProxyProvider.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, R])
    }));
    dart.setLibraryUri(ChangeNotifierProxyProvider, "package:provider_web/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider;
  });
  src__change_notifier_provider.ChangeNotifierProxyProvider = src__change_notifier_provider.ChangeNotifierProxyProvider$();
  dart.addTypeTests(src__change_notifier_provider.ChangeNotifierProxyProvider, _is_ChangeNotifierProxyProvider_default);
  const _is_ChangeNotifierProxyProvider2_default = Symbol('_is_ChangeNotifierProxyProvider2_default');
  src__change_notifier_provider.ChangeNotifierProxyProvider2$ = dart.generic((T, T2, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, R])))();
    class ChangeNotifierProxyProvider2 extends src__change_notifier_provider._NumericProxyProvider$(T, T2, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ChangeNotifierProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider2.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider2.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider2);
    ChangeNotifierProxyProvider2.prototype[_is_ChangeNotifierProxyProvider2_default] = true;
    dart.setGetterSignature(ChangeNotifierProxyProvider2, () => ({
      __proto__: dart.getGetters(ChangeNotifierProxyProvider2.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, R])
    }));
    dart.setLibraryUri(ChangeNotifierProxyProvider2, "package:provider_web/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider2;
  });
  src__change_notifier_provider.ChangeNotifierProxyProvider2 = src__change_notifier_provider.ChangeNotifierProxyProvider2$();
  dart.addTypeTests(src__change_notifier_provider.ChangeNotifierProxyProvider2, _is_ChangeNotifierProxyProvider2_default);
  const _is_ChangeNotifierProxyProvider3_default = Symbol('_is_ChangeNotifierProxyProvider3_default');
  src__change_notifier_provider.ChangeNotifierProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, R])))();
    class ChangeNotifierProxyProvider3 extends src__change_notifier_provider._NumericProxyProvider$(T, T2, T3, src__proxy_provider.Void, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ChangeNotifierProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider3.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider3.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider3);
    ChangeNotifierProxyProvider3.prototype[_is_ChangeNotifierProxyProvider3_default] = true;
    dart.setGetterSignature(ChangeNotifierProxyProvider3, () => ({
      __proto__: dart.getGetters(ChangeNotifierProxyProvider3.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, R])
    }));
    dart.setLibraryUri(ChangeNotifierProxyProvider3, "package:provider_web/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider3;
  });
  src__change_notifier_provider.ChangeNotifierProxyProvider3 = src__change_notifier_provider.ChangeNotifierProxyProvider3$();
  dart.addTypeTests(src__change_notifier_provider.ChangeNotifierProxyProvider3, _is_ChangeNotifierProxyProvider3_default);
  const _is_ChangeNotifierProxyProvider4_default = Symbol('_is_ChangeNotifierProxyProvider4_default');
  src__change_notifier_provider.ChangeNotifierProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, R])))();
    class ChangeNotifierProxyProvider4 extends src__change_notifier_provider._NumericProxyProvider$(T, T2, T3, T4, src__proxy_provider.Void, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ChangeNotifierProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider4.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider4.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider4);
    ChangeNotifierProxyProvider4.prototype[_is_ChangeNotifierProxyProvider4_default] = true;
    dart.setGetterSignature(ChangeNotifierProxyProvider4, () => ({
      __proto__: dart.getGetters(ChangeNotifierProxyProvider4.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, R])
    }));
    dart.setLibraryUri(ChangeNotifierProxyProvider4, "package:provider_web/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider4;
  });
  src__change_notifier_provider.ChangeNotifierProxyProvider4 = src__change_notifier_provider.ChangeNotifierProxyProvider4$();
  dart.addTypeTests(src__change_notifier_provider.ChangeNotifierProxyProvider4, _is_ChangeNotifierProxyProvider4_default);
  const _is_ChangeNotifierProxyProvider5_default = Symbol('_is_ChangeNotifierProxyProvider5_default');
  src__change_notifier_provider.ChangeNotifierProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, R])))();
    class ChangeNotifierProxyProvider5 extends src__change_notifier_provider._NumericProxyProvider$(T, T2, T3, T4, T5, src__proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ChangeNotifierProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider5.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider5.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider5);
    ChangeNotifierProxyProvider5.prototype[_is_ChangeNotifierProxyProvider5_default] = true;
    dart.setGetterSignature(ChangeNotifierProxyProvider5, () => ({
      __proto__: dart.getGetters(ChangeNotifierProxyProvider5.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, R])
    }));
    dart.setLibraryUri(ChangeNotifierProxyProvider5, "package:provider_web/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider5;
  });
  src__change_notifier_provider.ChangeNotifierProxyProvider5 = src__change_notifier_provider.ChangeNotifierProxyProvider5$();
  dart.addTypeTests(src__change_notifier_provider.ChangeNotifierProxyProvider5, _is_ChangeNotifierProxyProvider5_default);
  const _is_ChangeNotifierProxyProvider6_default = Symbol('_is_ChangeNotifierProxyProvider6_default');
  src__change_notifier_provider.ChangeNotifierProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, T6, R])))();
    class ChangeNotifierProxyProvider6 extends src__change_notifier_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ChangeNotifierProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider6.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider6.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider6);
    ChangeNotifierProxyProvider6.prototype[_is_ChangeNotifierProxyProvider6_default] = true;
    dart.setGetterSignature(ChangeNotifierProxyProvider6, () => ({
      __proto__: dart.getGetters(ChangeNotifierProxyProvider6.__proto__),
      builder: dart.fnType(R, [src__widgets__framework.BuildContext, T, T2, T3, T4, T5, T6, R])
    }));
    dart.setLibraryUri(ChangeNotifierProxyProvider6, "package:provider_web/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider6;
  });
  src__change_notifier_provider.ChangeNotifierProxyProvider6 = src__change_notifier_provider.ChangeNotifierProxyProvider6$();
  dart.addTypeTests(src__change_notifier_provider.ChangeNotifierProxyProvider6, _is_ChangeNotifierProxyProvider6_default);
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  const _is_Consumer_default = Symbol('_is_Consumer_default');
  src__consumer.Consumer$ = dart.generic(T => {
    let ConsumerOfT = () => (ConsumerOfT = dart.constFn(src__consumer.Consumer$(T)))();
    class Consumer extends src__widgets__framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, src__provider_web.Provider.of(T, context), this.child);
      }
      cloneWithChild(child) {
        return new (ConsumerOfT()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 12, file: "org-dartlang-app:///packages/provider_web/src/consumer.dart", parameterLocations: const$78 || (const$78 = dart.constList([const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 7, name: "key"}))), const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 7, name: "builder"}))), const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (Consumer.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/consumer.dart", 40, 16, "builder != null");
      Consumer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer.prototype;
    dart.addTypeTests(Consumer);
    Consumer.prototype[_is_Consumer_default] = true;
    const child$ = Symbol("Consumer.child");
    const builder$ = Symbol("Consumer.builder");
    Consumer[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer, () => ({
      __proto__: dart.getMethods(Consumer.__proto__),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
      cloneWithChild: dart.fnType(src__consumer.Consumer$(T), [src__widgets__framework.Widget])
    }));
    dart.setLibraryUri(Consumer, "package:provider_web/src/consumer.dart");
    dart.setFieldSignature(Consumer, () => ({
      __proto__: dart.getFields(Consumer.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, T, src__widgets__framework.Widget]))
    }));
    return Consumer;
  });
  src__consumer.Consumer = src__consumer.Consumer$();
  dart.addTypeTests(src__consumer.Consumer, _is_Consumer_default);
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  const _is_Consumer2_default = Symbol('_is_Consumer2_default');
  src__consumer.Consumer2$ = dart.generic((A, B) => {
    let Consumer2OfA$B = () => (Consumer2OfA$B = dart.constFn(src__consumer.Consumer2$(A, B)))();
    class Consumer2 extends src__widgets__framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, src__provider_web.Provider.of(A, context), src__provider_web.Provider.of(B, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer2OfA$B()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 12, file: "org-dartlang-app:///packages/provider_web/src/consumer.dart", parameterLocations: const$83 || (const$83 = dart.constList([const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 7, name: "key"}))), const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 7, name: "builder"}))), const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (Consumer2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/consumer.dart", 90, 16, "builder != null");
      Consumer2.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer2.prototype;
    dart.addTypeTests(Consumer2);
    Consumer2.prototype[_is_Consumer2_default] = true;
    const child$ = Symbol("Consumer2.child");
    const builder$ = Symbol("Consumer2.builder");
    Consumer2[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer2, () => ({
      __proto__: dart.getMethods(Consumer2.__proto__),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
      cloneWithChild: dart.fnType(src__consumer.Consumer2$(A, B), [src__widgets__framework.Widget])
    }));
    dart.setLibraryUri(Consumer2, "package:provider_web/src/consumer.dart");
    dart.setFieldSignature(Consumer2, () => ({
      __proto__: dart.getFields(Consumer2.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, A, B, src__widgets__framework.Widget]))
    }));
    return Consumer2;
  });
  src__consumer.Consumer2 = src__consumer.Consumer2$();
  dart.addTypeTests(src__consumer.Consumer2, _is_Consumer2_default);
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  const _is_Consumer3_default = Symbol('_is_Consumer3_default');
  src__consumer.Consumer3$ = dart.generic((A, B, C) => {
    let Consumer3OfA$B$C = () => (Consumer3OfA$B$C = dart.constFn(src__consumer.Consumer3$(A, B, C)))();
    class Consumer3 extends src__widgets__framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, src__provider_web.Provider.of(A, context), src__provider_web.Provider.of(B, context), src__provider_web.Provider.of(C, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer3OfA$B$C()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 155, column: 12, file: "org-dartlang-app:///packages/provider_web/src/consumer.dart", parameterLocations: const$88 || (const$88 = dart.constList([const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 156, column: 7, name: "key"}))), const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 7, name: "builder"}))), const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (Consumer3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/consumer.dart", 130, 16, "builder != null");
      Consumer3.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer3.prototype;
    dart.addTypeTests(Consumer3);
    Consumer3.prototype[_is_Consumer3_default] = true;
    const child$ = Symbol("Consumer3.child");
    const builder$ = Symbol("Consumer3.builder");
    Consumer3[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer3, () => ({
      __proto__: dart.getMethods(Consumer3.__proto__),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
      cloneWithChild: dart.fnType(src__consumer.Consumer3$(A, B, C), [src__widgets__framework.Widget])
    }));
    dart.setLibraryUri(Consumer3, "package:provider_web/src/consumer.dart");
    dart.setFieldSignature(Consumer3, () => ({
      __proto__: dart.getFields(Consumer3.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, A, B, C, src__widgets__framework.Widget]))
    }));
    return Consumer3;
  });
  src__consumer.Consumer3 = src__consumer.Consumer3$();
  dart.addTypeTests(src__consumer.Consumer3, _is_Consumer3_default);
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  const _is_Consumer4_default = Symbol('_is_Consumer4_default');
  src__consumer.Consumer4$ = dart.generic((A, B, C, D) => {
    let Consumer4OfA$B$C$D = () => (Consumer4OfA$B$C$D = dart.constFn(src__consumer.Consumer4$(A, B, C, D)))();
    class Consumer4 extends src__widgets__framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, src__provider_web.Provider.of(A, context), src__provider_web.Provider.of(B, context), src__provider_web.Provider.of(C, context), src__provider_web.Provider.of(D, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer4OfA$B$C$D()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 12, file: "org-dartlang-app:///packages/provider_web/src/consumer.dart", parameterLocations: const$93 || (const$93 = dart.constList([const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 197, column: 7, name: "key"}))), const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 198, column: 7, name: "builder"}))), const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 199, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (Consumer4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/consumer.dart", 171, 16, "builder != null");
      Consumer4.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer4.prototype;
    dart.addTypeTests(Consumer4);
    Consumer4.prototype[_is_Consumer4_default] = true;
    const child$ = Symbol("Consumer4.child");
    const builder$ = Symbol("Consumer4.builder");
    Consumer4[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer4, () => ({
      __proto__: dart.getMethods(Consumer4.__proto__),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
      cloneWithChild: dart.fnType(src__consumer.Consumer4$(A, B, C, D), [src__widgets__framework.Widget])
    }));
    dart.setLibraryUri(Consumer4, "package:provider_web/src/consumer.dart");
    dart.setFieldSignature(Consumer4, () => ({
      __proto__: dart.getFields(Consumer4.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, A, B, C, D, src__widgets__framework.Widget]))
    }));
    return Consumer4;
  });
  src__consumer.Consumer4 = src__consumer.Consumer4$();
  dart.addTypeTests(src__consumer.Consumer4, _is_Consumer4_default);
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  const _is_Consumer5_default = Symbol('_is_Consumer5_default');
  src__consumer.Consumer5$ = dart.generic((A, B, C, D, E) => {
    let Consumer5OfA$B$C$D$E = () => (Consumer5OfA$B$C$D$E = dart.constFn(src__consumer.Consumer5$(A, B, C, D, E)))();
    class Consumer5 extends src__widgets__framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, src__provider_web.Provider.of(A, context), src__provider_web.Provider.of(B, context), src__provider_web.Provider.of(C, context), src__provider_web.Provider.of(D, context), src__provider_web.Provider.of(E, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer5OfA$B$C$D$E()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 12, file: "org-dartlang-app:///packages/provider_web/src/consumer.dart", parameterLocations: const$98 || (const$98 = dart.constList([const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 240, column: 7, name: "key"}))), const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 241, column: 7, name: "builder"}))), const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 242, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (Consumer5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/consumer.dart", 212, 16, "builder != null");
      Consumer5.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer5.prototype;
    dart.addTypeTests(Consumer5);
    Consumer5.prototype[_is_Consumer5_default] = true;
    const child$ = Symbol("Consumer5.child");
    const builder$ = Symbol("Consumer5.builder");
    Consumer5[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer5, () => ({
      __proto__: dart.getMethods(Consumer5.__proto__),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
      cloneWithChild: dart.fnType(src__consumer.Consumer5$(A, B, C, D, E), [src__widgets__framework.Widget])
    }));
    dart.setLibraryUri(Consumer5, "package:provider_web/src/consumer.dart");
    dart.setFieldSignature(Consumer5, () => ({
      __proto__: dart.getFields(Consumer5.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, A, B, C, D, E, src__widgets__framework.Widget]))
    }));
    return Consumer5;
  });
  src__consumer.Consumer5 = src__consumer.Consumer5$();
  dart.addTypeTests(src__consumer.Consumer5, _is_Consumer5_default);
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  const _is_Consumer6_default = Symbol('_is_Consumer6_default');
  src__consumer.Consumer6$ = dart.generic((A, B, C, D, E, F) => {
    let Consumer6OfA$B$C$D$E$F = () => (Consumer6OfA$B$C$D$E$F = dart.constFn(src__consumer.Consumer6$(A, B, C, D, E, F)))();
    class Consumer6 extends src__widgets__framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, src__provider_web.Provider.of(A, context), src__provider_web.Provider.of(B, context), src__provider_web.Provider.of(C, context), src__provider_web.Provider.of(D, context), src__provider_web.Provider.of(E, context), src__provider_web.Provider.of(F, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer6OfA$B$C$D$E$F()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 283, column: 12, file: "org-dartlang-app:///packages/provider_web/src/consumer.dart", parameterLocations: const$103 || (const$103 = dart.constList([const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 284, column: 7, name: "key"}))), const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 285, column: 7, name: "builder"}))), const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 286, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (Consumer6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/consumer.dart", 255, 16, "builder != null");
      Consumer6.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer6.prototype;
    dart.addTypeTests(Consumer6);
    Consumer6.prototype[_is_Consumer6_default] = true;
    const child$ = Symbol("Consumer6.child");
    const builder$ = Symbol("Consumer6.builder");
    Consumer6[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer6, () => ({
      __proto__: dart.getMethods(Consumer6.__proto__),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
      cloneWithChild: dart.fnType(src__consumer.Consumer6$(A, B, C, D, E, F), [src__widgets__framework.Widget])
    }));
    dart.setLibraryUri(Consumer6, "package:provider_web/src/consumer.dart");
    dart.setFieldSignature(Consumer6, () => ({
      __proto__: dart.getFields(Consumer6.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, A, B, C, D, E, F, src__widgets__framework.Widget]))
    }));
    return Consumer6;
  });
  src__consumer.Consumer6 = src__consumer.Consumer6$();
  dart.addTypeTests(src__consumer.Consumer6, _is_Consumer6_default);
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  const _is_StreamProvider_default = Symbol('_is_StreamProvider_default');
  src__async_provider.StreamProvider$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let BuilderStateDelegateOfStreamOfT = () => (BuilderStateDelegateOfStreamOfT = dart.constFn(src__delegate_widget.BuilderStateDelegate$(StreamOfT())))();
    let _StreamControllerBuilderDelegateOfT = () => (_StreamControllerBuilderDelegateOfT = dart.constFn(src__async_provider._StreamControllerBuilderDelegate$(T)))();
    let SingleValueDelegateOfStreamOfT = () => (SingleValueDelegateOfStreamOfT = dart.constFn(src__delegate_widget.SingleValueDelegate$(StreamOfT())))();
    let StreamProviderOfT = () => (StreamProviderOfT = dart.constFn(src__async_provider.StreamProvider$(T)))();
    let StreamBuilderOfT = () => (StreamBuilderOfT = dart.constFn(src__widgets__async.StreamBuilder$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(src__provider_web.InheritedProvider$(T)))();
    let AsyncSnapshotOfT = () => (AsyncSnapshotOfT = dart.constFn(src__widgets__async.AsyncSnapshot$(T)))();
    let BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT = () => (BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT = dart.constFn(dart.fnType(InheritedProviderOfT(), [src__widgets__framework.BuildContext, AsyncSnapshotOfT()])))();
    class StreamProvider extends src__delegate_widget.ValueDelegateWidget$(async.Stream$(T)) {
      get initialData() {
        return this[initialData$];
      }
      set initialData(value) {
        super.initialData = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get catchError() {
        return this[catchError$];
      }
      set catchError(value) {
        super.catchError = value;
      }
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      cloneWithChild(child) {
        return new (StreamProviderOfT()).__({key: this.key, delegate: this.delegate, updateShouldNotify: this.updateShouldNotify, initialData: this.initialData, catchError: this.catchError, child: child, $creationLocationd_0dea112b090073317d4: const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 27, file: "org-dartlang-app:///packages/provider_web/src/async_provider.dart", parameterLocations: const$111 || (const$111 = dart.constList([const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 7, name: "key"}))), const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 7, name: "delegate"}))), const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 7, name: "updateShouldNotify"}))), const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 7, name: "initialData"}))), const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 130, column: 7, name: "catchError"}))), const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      build(context) {
        return new (StreamBuilderOfT()).new({stream: this.delegate.value, initialData: this.initialData, builder: dart.fn((_, snapshot) => new (InheritedProviderOfT()).new({value: src__async_provider._snapshotToValue(T, snapshot, context, this.catchError, this), child: this.child, updateShouldNotify: this.updateShouldNotify, $creationLocationd_0dea112b090073317d4: const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 141, column: 16, file: "org-dartlang-app:///packages/provider_web/src/async_provider.dart", parameterLocations: const$116 || (const$116 = dart.constList([const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 11, name: "value"}))), const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 11, name: "child"}))), const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 11, name: "updateShouldNotify"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT()), $creationLocationd_0dea112b090073317d4: const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 12, file: "org-dartlang-app:///packages/provider_web/src/async_provider.dart", parameterLocations: const$121 || (const$121 = dart.constList([const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 7, name: "stream"}))), const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 7, name: "initialData"}))), const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 7, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (StreamProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      StreamProvider.__.call(this, {key: key, delegate: new (BuilderStateDelegateOfStreamOfT()).new(builder), initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = StreamProvider.prototype;
    (StreamProvider.controller = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      StreamProvider.__.call(this, {key: key, delegate: new (_StreamControllerBuilderDelegateOfT()).new(builder), initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = StreamProvider.prototype;
    (StreamProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      StreamProvider.__.call(this, {key: key, delegate: new (SingleValueDelegateOfStreamOfT()).new(value), initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = StreamProvider.prototype;
    (StreamProvider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[initialData$] = initialData;
      this[catchError$] = catchError;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      StreamProvider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = StreamProvider.prototype;
    dart.addTypeTests(StreamProvider);
    StreamProvider.prototype[_is_StreamProvider_default] = true;
    const initialData$ = Symbol("StreamProvider.initialData");
    const child$ = Symbol("StreamProvider.child");
    const catchError$ = Symbol("StreamProvider.catchError");
    const updateShouldNotify$ = Symbol("StreamProvider.updateShouldNotify");
    StreamProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(StreamProvider, () => ({
      __proto__: dart.getMethods(StreamProvider.__proto__),
      cloneWithChild: dart.fnType(src__async_provider.StreamProvider$(T), [src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setLibraryUri(StreamProvider, "package:provider_web/src/async_provider.dart");
    dart.setFieldSignature(StreamProvider, () => ({
      __proto__: dart.getFields(StreamProvider.__proto__),
      initialData: dart.finalFieldType(T),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      catchError: dart.finalFieldType(dart.fnType(T, [src__widgets__framework.BuildContext, core.Object])),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return StreamProvider;
  });
  src__async_provider.StreamProvider = src__async_provider.StreamProvider$();
  dart.addTypeTests(src__async_provider.StreamProvider, _is_StreamProvider_default);
  const _controller = dart.privateName(src__async_provider, "_controller");
  const _builder$0 = dart.privateName(src__async_provider, "_builder");
  const _is__StreamControllerBuilderDelegate_default = Symbol('_is__StreamControllerBuilderDelegate_default');
  src__async_provider._StreamControllerBuilderDelegate$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let _StreamControllerBuilderDelegateOfT = () => (_StreamControllerBuilderDelegateOfT = dart.constFn(src__async_provider._StreamControllerBuilderDelegate$(T)))();
    class _StreamControllerBuilderDelegate extends src__delegate_widget.ValueStateDelegate$(async.Stream$(T)) {
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = StreamOfT()._check(value);
      }
      initDelegate() {
        let t0;
        super.initDelegate();
        this[_controller] = this[_builder$0](this.context);
        this.value = (t0 = this[_controller], t0 == null ? null : t0.stream);
      }
      didUpdateDelegate(old) {
        _StreamControllerBuilderDelegateOfT()._check(old);
        super.didUpdateDelegate(old);
        this.value = old.value;
        this[_controller] = old[_controller];
      }
      dispose() {
        let t0;
        t0 = this[_controller];
        t0 == null ? null : t0.close();
        super.dispose();
      }
    }
    (_StreamControllerBuilderDelegate.new = function(_builder) {
      this[_controller] = null;
      this[value$] = null;
      this[_builder$0] = _builder;
      if (!(_builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_web/src/async_provider.dart", 172, 60, "_builder != null");
      _StreamControllerBuilderDelegate.__proto__.new.call(this);
      ;
    }).prototype = _StreamControllerBuilderDelegate.prototype;
    dart.addTypeTests(_StreamControllerBuilderDelegate);
    _StreamControllerBuilderDelegate.prototype[_is__StreamControllerBuilderDelegate_default] = true;
    const value$ = Symbol("_StreamControllerBuilderDelegate.value");
    dart.setLibraryUri(_StreamControllerBuilderDelegate, "package:provider_web/src/async_provider.dart");
    dart.setFieldSignature(_StreamControllerBuilderDelegate, () => ({
      __proto__: dart.getFields(_StreamControllerBuilderDelegate.__proto__),
      [_controller]: dart.fieldType(async.StreamController$(T)),
      [_builder$0]: dart.fieldType(dart.fnType(async.StreamController$(T), [src__widgets__framework.BuildContext])),
      value: dart.fieldType(async.Stream$(T))
    }));
    return _StreamControllerBuilderDelegate;
  });
  src__async_provider._StreamControllerBuilderDelegate = src__async_provider._StreamControllerBuilderDelegate$();
  dart.addTypeTests(src__async_provider._StreamControllerBuilderDelegate, _is__StreamControllerBuilderDelegate_default);
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  const _is_FutureProvider_default = Symbol('_is_FutureProvider_default');
  src__async_provider.FutureProvider$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let BuilderStateDelegateOfFutureOfT = () => (BuilderStateDelegateOfFutureOfT = dart.constFn(src__delegate_widget.BuilderStateDelegate$(FutureOfT())))();
    let SingleValueDelegateOfFutureOfT = () => (SingleValueDelegateOfFutureOfT = dart.constFn(src__delegate_widget.SingleValueDelegate$(FutureOfT())))();
    let FutureProviderOfT = () => (FutureProviderOfT = dart.constFn(src__async_provider.FutureProvider$(T)))();
    let FutureBuilderOfT = () => (FutureBuilderOfT = dart.constFn(src__widgets__async.FutureBuilder$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(src__provider_web.InheritedProvider$(T)))();
    let AsyncSnapshotOfT = () => (AsyncSnapshotOfT = dart.constFn(src__widgets__async.AsyncSnapshot$(T)))();
    let BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT = () => (BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT = dart.constFn(dart.fnType(InheritedProviderOfT(), [src__widgets__framework.BuildContext, AsyncSnapshotOfT()])))();
    class FutureProvider extends src__delegate_widget.ValueDelegateWidget$(async.Future$(T)) {
      get initialData() {
        return this[initialData$];
      }
      set initialData(value) {
        super.initialData = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get catchError() {
        return this[catchError$];
      }
      set catchError(value) {
        super.catchError = value;
      }
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      cloneWithChild(child) {
        return new (FutureProviderOfT()).__({key: this.key, delegate: this.delegate, updateShouldNotify: this.updateShouldNotify, initialData: this.initialData, catchError: this.catchError, child: child, $creationLocationd_0dea112b090073317d4: const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 282, column: 27, file: "org-dartlang-app:///packages/provider_web/src/async_provider.dart", parameterLocations: const$129 || (const$129 = dart.constList([const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 283, column: 7, name: "key"}))), const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 284, column: 7, name: "delegate"}))), const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 285, column: 7, name: "updateShouldNotify"}))), const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 286, column: 7, name: "initialData"}))), const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 287, column: 7, name: "catchError"}))), const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 288, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      build(context) {
        return new (FutureBuilderOfT()).new({future: this.delegate.value, initialData: this.initialData, builder: dart.fn((_, snapshot) => new (InheritedProviderOfT()).new({value: src__async_provider._snapshotToValue(T, snapshot, context, this.catchError, this), updateShouldNotify: this.updateShouldNotify, child: this.child, $creationLocationd_0dea112b090073317d4: const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 298, column: 16, file: "org-dartlang-app:///packages/provider_web/src/async_provider.dart", parameterLocations: const$134 || (const$134 = dart.constList([const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 299, column: 11, name: "value"}))), const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 300, column: 11, name: "updateShouldNotify"}))), const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 301, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT()), $creationLocationd_0dea112b090073317d4: const$140 || (const$140 = dart.const(new src__widgets__widget_inspector._Location.new({line: 294, column: 12, file: "org-dartlang-app:///packages/provider_web/src/async_provider.dart", parameterLocations: const$139 || (const$139 = dart.constList([const$136 || (const$136 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 7, name: "future"}))), const$137 || (const$137 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 7, name: "initialData"}))), const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 7, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (FutureProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      FutureProvider.__.call(this, {key: key, initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, delegate: new (BuilderStateDelegateOfFutureOfT()).new(builder), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = FutureProvider.prototype;
    (FutureProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      FutureProvider.__.call(this, {key: key, initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, delegate: new (SingleValueDelegateOfFutureOfT()).new(value), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = FutureProvider.prototype;
    (FutureProvider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[initialData$] = initialData;
      this[catchError$] = catchError;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      FutureProvider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = FutureProvider.prototype;
    dart.addTypeTests(FutureProvider);
    FutureProvider.prototype[_is_FutureProvider_default] = true;
    const initialData$ = Symbol("FutureProvider.initialData");
    const child$ = Symbol("FutureProvider.child");
    const catchError$ = Symbol("FutureProvider.catchError");
    const updateShouldNotify$ = Symbol("FutureProvider.updateShouldNotify");
    FutureProvider[dart.implements] = () => [src__provider_web.SingleChildCloneableWidget];
    dart.setMethodSignature(FutureProvider, () => ({
      __proto__: dart.getMethods(FutureProvider.__proto__),
      cloneWithChild: dart.fnType(src__async_provider.FutureProvider$(T), [src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setLibraryUri(FutureProvider, "package:provider_web/src/async_provider.dart");
    dart.setFieldSignature(FutureProvider, () => ({
      __proto__: dart.getFields(FutureProvider.__proto__),
      initialData: dart.finalFieldType(T),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      catchError: dart.finalFieldType(dart.fnType(T, [src__widgets__framework.BuildContext, core.Object])),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return FutureProvider;
  });
  src__async_provider.FutureProvider = src__async_provider.FutureProvider$();
  dart.addTypeTests(src__async_provider.FutureProvider, _is_FutureProvider_default);
  src__async_provider._snapshotToValue = function(T, snapshot, context, catchError, owner) {
    let t0;
    if (dart.test(snapshot.hasError)) {
      if (catchError != null) {
        return catchError(context, snapshot.error);
      }
      dart.throw(src__foundation__assertions.FlutterError.new("An exception was throw by " + dart.str((t0 = owner.delegate.value, t0 == null ? null : dart.runtimeType(t0))) + " listened by\n" + dart.str(owner) + ", but no `catchError` was provided.\n\nException:\n" + dart.str(snapshot.error) + "\n"));
    }
    return snapshot.data;
  };
  dart.trackLibraries("packages/provider_web/provider_web", {
    "package:provider_web/provider_web.dart": provider_web,
    "package:provider_web/src/value_listenable_provider.dart": src__value_listenable_provider,
    "package:provider_web/src/provider_web.dart": src__provider_web,
    "package:provider_web/src/delegate_widget.dart": src__delegate_widget,
    "package:provider_web/src/listenable_provider.dart": src__listenable_provider,
    "package:provider_web/src/proxy_provider.dart": src__proxy_provider,
    "package:provider_web/src/change_notifier_provider.dart": src__change_notifier_provider,
    "package:provider_web/src/consumer.dart": src__consumer,
    "package:provider_web/src/async_provider.dart": src__async_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/provider_web/src/delegate_widget.dart","org-dartlang-app:///packages/provider_web/src/value_listenable_provider.dart","org-dartlang-app:///packages/provider_web/src/provider_web.dart","org-dartlang-app:///packages/provider_web/src/listenable_provider.dart","org-dartlang-app:///packages/provider_web/src/proxy_provider.dart","org-dartlang-app:///packages/provider_web/src/change_notifier_provider.dart","org-dartlang-app:///packages/provider_web/src/consumer.dart","org-dartlang-app:///packages/provider_web/src/async_provider.dart"],"names":[],"mappings":"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","file":"provider_web.ddc.js"}');
  // Exports:
  return {
    provider_web: provider_web,
    src__value_listenable_provider: src__value_listenable_provider,
    src__provider_web: src__provider_web,
    src__delegate_widget: src__delegate_widget,
    src__listenable_provider: src__listenable_provider,
    src__proxy_provider: src__proxy_provider,
    src__change_notifier_provider: src__change_notifier_provider,
    src__consumer: src__consumer,
    src__async_provider: src__async_provider
  };
});

//# sourceMappingURL=provider_web.ddc.js.map
