To reproduce the bug run:

```
yarn
yarn test
```

Error will be:

```
expect(function).not.toThrow()

Expected the function not to throw an error.
Instead, it threw:
  Invariant Violation: getNodeFromInstance: Invalid argument.      
	  at invariant (node_modules/fbjs/lib/invariant.js:42:15)
	  at Object.getNodeFromInstance (node_modules/react-dom/lib/ReactDOMComponentTree.js:160:77)
	  at Object.findDOMNode (node_modules/react-dom/lib/findDOMNode.js:47:41)
	  at Object.bindFocusables (node_modules/react-keydown/dist/lib/dom_helpers.js:34:35)
	  at onMount (node_modules/react-keydown/dist/event_handlers.js:104:25)
	  at MyComponent.target.componentDidMount (node_modules/react-keydown/dist/decorators/method_decorator.js:59:35)
	  at node_modules/enzyme/build/ShallowWrapper.js:123:20
	  at ReactDefaultBatchingStrategyTransaction.perform (node_modules/react-test-renderer/lib/shallow/Transaction.js:141:20)
	  at Object.batchedUpdates (node_modules/react-test-renderer/lib/shallow/ReactDefaultBatchingStrategy.js:60:26)
	  at Object.batchedUpdates (node_modules/react-test-renderer/lib/shallow/ReactUpdates.js:95:27)
	  at ReactShallowRenderer.unstable_batchedUpdates (node_modules/react-test-renderer/lib/shallow/ReactShallowRenderer.js:128:25)
	  at node_modules/enzyme-adapter-react-15/build/ReactFifteenAdapter.js:289:33
	  at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:95:16)
	  at Object.batchedUpdates (node_modules/enzyme-adapter-react-15/build/ReactFifteenAdapter.js:288:66)
	  at new ShallowWrapper (node_modules/enzyme/build/ShallowWrapper.js:122:24)
	  at shallow (node_modules/enzyme/build/shallow.js:19:10)
	  at expect (__tests__/index.js:32:24)
	  at Object.<anonymous> (node_modules/expect/build/to_throw_matchers.js:43:5)
	  at Object.throwingMatcher [as toThrow] (node_modules/expect/build/index.js:199:24)
	  at Object.it (__tests__/index.js:33:10)
		  at Promise (<anonymous>)
		  at <anonymous>
	  at process._tickCallback (internal/process/next_tick.js:188:7)

  at Object.it (__tests__/index.js:33:10)
	  at Promise (<anonymous>)
	  at <anonymous>
  at process._tickCallback (internal/process/next_tick.js:188:7)
```