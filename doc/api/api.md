<!-- // Code generated by coz. DO NOT EDIT. -->
# the-scene-mixins@4.0.6

Mixins for the-scene

+ Functions
  + [bindDefaults()](#the-scene-mixins-function-bind-defaults)
  + [bindScope()](#the-scene-mixins-function-bind-scope)
  + [siteToast()](#the-scene-mixins-function-site-toast)
  + [reset(queues)](#the-scene-mixins-function-reset)
  + [showError(message)](#the-scene-mixins-function-show-error)
  + [showInfo(message)](#the-scene-mixins-function-show-info)
  + [showWarn(message)](#the-scene-mixins-function-show-warn)
  + [withBack(Class)](#the-scene-mixins-function-with-back)
  + [goBack()](#the-scene-mixins-function-go-back)
  + [withBusy(Class)](#the-scene-mixins-function-with-busy)
  + [busyFor(duration)](#the-scene-mixins-function-busy-for)
  + [busyWhile(task)](#the-scene-mixins-function-busy-while)
  + [isBusy()](#the-scene-mixins-function-is-busy)
  + [waitWhileBusy()](#the-scene-mixins-function-wait-while-busy)
  + [withEntities(Class)](#the-scene-mixins-function-with-entities)
  + [addEntities(entities, options)](#the-scene-mixins-function-add-entities)
  + [addEntity(entity, options)](#the-scene-mixins-function-add-entity)
  + [deleteEntity(entity)](#the-scene-mixins-function-delete-entity)
  + [getEntities()](#the-scene-mixins-function-get-entities)
  + [receiveEntity(entity, options)](#the-scene-mixins-function-receive-entity)
  + [updateEntity(entity)](#the-scene-mixins-function-update-entity)
  + [withEntry(Class)](#the-scene-mixins-function-with-entry)
  + [getEntry(options)](#the-scene-mixins-function-get-entry)
  + [hasEntryErrorFor(name)](#the-scene-mixins-function-has-entry-error-for)
  + [processEntry(handler)](#the-scene-mixins-function-process-entry)
  + [resetEntry()](#the-scene-mixins-function-reset-entry)
  + [setEntry(values)](#the-scene-mixins-function-set-entry)
  + [setEntryErrors(errors)](#the-scene-mixins-function-set-entry-errors)
  + [withFailure(Class)](#the-scene-mixins-function-with-failure)
  + [withFilter(Class)](#the-scene-mixins-function-with-filter)
  + [getFilter()](#the-scene-mixins-function-get-filter)
  + [setFilter(filter)](#the-scene-mixins-function-set-filter)
  + [setFilterByQ()](#the-scene-mixins-function-set-filter-by-q)
  + [withForm(Class)](#the-scene-mixins-function-with-form)
  + [withHistory(Class)](#the-scene-mixins-function-with-history)
  + [replaceHistoryByQuery(query)](#the-scene-mixins-function-replace-history-by-query)
  + [withId(Class)](#the-scene-mixins-function-with-id)
  + [getId()](#the-scene-mixins-function-get-id)
  + [isKnownId(id)](#the-scene-mixins-function-is-known-id)
  + [withLimit(Class)](#the-scene-mixins-function-with-limit)
  + [getLimit()](#the-scene-mixins-function-get-limit)
  + [nextLimit()](#the-scene-mixins-function-next-limit)
  + [setLimit(limit)](#the-scene-mixins-function-set-limit)
  + [updateToNextLimit()](#the-scene-mixins-function-update-to-next-limit)
  + [withLocation(Class)](#the-scene-mixins-function-with-location)
  + [changeLocationTo(href)](#the-scene-mixins-function-change-location-to)
  + [getLocationHash()](#the-scene-mixins-function-get-location-hash)
  + [reloadLocation()](#the-scene-mixins-function-reload-location)
  + [setLocationHash(hash)](#the-scene-mixins-function-set-location-hash)
  + [withPage(Class)](#the-scene-mixins-function-with-page)
  + [getPage()](#the-scene-mixins-function-get-page)
  + [withQuery(Class)](#the-scene-mixins-function-with-query)
  + [getQueryFromSearch(search)](#the-scene-mixins-function-get-query-from-search)
  + [mergeQueryToSearch(query)](#the-scene-mixins-function-merge-query-to-search)
  + [queryWithSearch(search)](#the-scene-mixins-function-query-with-search)
  + [withReady(Class)](#the-scene-mixins-function-with-ready)
  + [ifReady(task)](#the-scene-mixins-function-if-ready)
  + [readyWhen(task)](#the-scene-mixins-function-ready-when)
  + [unlessReady(task)](#the-scene-mixins-function-unless-ready)
  + [withResult(Class)](#the-scene-mixins-function-with-result)
  + [resultFor(action)](#the-scene-mixins-function-result-for)
  + [withSort(Class)](#the-scene-mixins-function-with-sort)
  + [withTargets(Class)](#the-scene-mixins-function-with-targets)
  + [addTargets(targets)](#the-scene-mixins-function-add-targets)
  + [getTargetIds()](#the-scene-mixins-function-get-target-ids)
  + [getTargetRefs()](#the-scene-mixins-function-get-target-refs)
  + [getTargets()](#the-scene-mixins-function-get-targets)
  + [withValues(Class)](#the-scene-mixins-function-with-values)
  + [asClassMixin()](#the-scene-mixins-function-as-class-mixin)
  + [asMethodWrap()](#the-scene-mixins-function-as-method-wrap)
  + [injectProperties(Class)](#the-scene-mixins-function-inject-properties)

## Functions

<a class='md-heading-link' name="the-scene-mixins-function-bind-defaults" ></a>

### bindDefaults() -> `function`

For bindDefaults
<a class='md-heading-link' name="the-scene-mixins-function-bind-scope" ></a>

### bindScope() -> `function`

For bindScope
<a class='md-heading-link' name="the-scene-mixins-function-site-toast" ></a>

### siteToast() -> `function`

Site toast mix
<a class='md-heading-link' name="the-scene-mixins-function-reset" ></a>

### reset(queues)

Rest toasts

| Param | Type | Description |
| ----- | --- | -------- |
| queues | Object.&lt;string, Array.&lt;string&gt;&gt; | Toast queue |

<a class='md-heading-link' name="the-scene-mixins-function-show-error" ></a>

### showError(message)

Show error toast

| Param | Type | Description |
| ----- | --- | -------- |
| message | string |  |

<a class='md-heading-link' name="the-scene-mixins-function-show-info" ></a>

### showInfo(message)

Show info toast

| Param | Type | Description |
| ----- | --- | -------- |
| message | string |  |

<a class='md-heading-link' name="the-scene-mixins-function-show-warn" ></a>

### showWarn(message)

Show warn toast

| Param | Type | Description |
| ----- | --- | -------- |
| message | string |  |

<a class='md-heading-link' name="the-scene-mixins-function-with-back" ></a>

### withBack(Class) -> `function`

withBack mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-go-back" ></a>

### goBack()

Go Back
<a class='md-heading-link' name="the-scene-mixins-function-with-busy" ></a>

### withBusy(Class) -> `function`

withBusy mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-busy-for" ></a>

### busyFor(duration) -> `Promise.<void>`

Wait busy for

| Param | Type | Description |
| ----- | --- | -------- |
| duration | number |  |

<a class='md-heading-link' name="the-scene-mixins-function-busy-while" ></a>

### busyWhile(task) -> `Promise.<void>`

Set busy true while task active

| Param | Type | Description |
| ----- | --- | -------- |
| task | function |  |

<a class='md-heading-link' name="the-scene-mixins-function-is-busy" ></a>

### isBusy() -> `boolean`

Is busy or not
<a class='md-heading-link' name="the-scene-mixins-function-wait-while-busy" ></a>

### waitWhileBusy() -> `Promise.<void>`

Wait while busy
<a class='md-heading-link' name="the-scene-mixins-function-with-entities" ></a>

### withEntities(Class) -> `function`

withEntities mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-add-entities" ></a>

### addEntities(entities, options)

Add entities

| Param | Type | Description |
| ----- | --- | -------- |
| entities | Array.&lt;Object&gt; |  |
| options | Object | Optional settings |

<a class='md-heading-link' name="the-scene-mixins-function-add-entity" ></a>

### addEntity(entity, options)

Add a entity

| Param | Type | Description |
| ----- | --- | -------- |
| entity | Object |  |
| options | Object | Optional settings |

<a class='md-heading-link' name="the-scene-mixins-function-delete-entity" ></a>

### deleteEntity(entity)

Delete entity

| Param | Type | Description |
| ----- | --- | -------- |
| entity | Object |  |

<a class='md-heading-link' name="the-scene-mixins-function-get-entities" ></a>

### getEntities() -> `Array.<Object>`

Get entities
<a class='md-heading-link' name="the-scene-mixins-function-receive-entity" ></a>

### receiveEntity(entity, options)

Receive an entity

| Param | Type | Description |
| ----- | --- | -------- |
| entity |  |  |
| options | Object | Optional settings |

<a class='md-heading-link' name="the-scene-mixins-function-update-entity" ></a>

### updateEntity(entity)

Update existing entity

| Param | Type | Description |
| ----- | --- | -------- |
| entity | Object |  |

<a class='md-heading-link' name="the-scene-mixins-function-with-entry" ></a>

### withEntry(Class) -> `function`

withEntry mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-get-entry" ></a>

### getEntry(options) -> `Object`

Get entry values

| Param | Type | Description |
| ----- | --- | -------- |
| options | Object |  |

<a class='md-heading-link' name="the-scene-mixins-function-has-entry-error-for" ></a>

### hasEntryErrorFor(name) -> `boolean`



| Param | Type | Description |
| ----- | --- | -------- |
| name | string |  |

<a class='md-heading-link' name="the-scene-mixins-function-process-entry" ></a>

### processEntry(handler) -> `Promise.<void>`

Process an entry

| Param | Type | Description |
| ----- | --- | -------- |
| handler | function |  |

<a class='md-heading-link' name="the-scene-mixins-function-reset-entry" ></a>

### resetEntry()

Reset entry
<a class='md-heading-link' name="the-scene-mixins-function-set-entry" ></a>

### setEntry(values)

Set entry values

| Param | Type | Description |
| ----- | --- | -------- |
| values | Object |  |

<a class='md-heading-link' name="the-scene-mixins-function-set-entry-errors" ></a>

### setEntryErrors(errors)

Set entry errors

| Param | Type | Description |
| ----- | --- | -------- |
| errors | Object |  |

<a class='md-heading-link' name="the-scene-mixins-function-with-failure" ></a>

### withFailure(Class) -> `function`

withFailure mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-with-filter" ></a>

### withFilter(Class) -> `function`

withFilter mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-get-filter" ></a>

### getFilter() -> `Object`

Get filter
<a class='md-heading-link' name="the-scene-mixins-function-set-filter" ></a>

### setFilter(filter)

Set filter

| Param | Type | Description |
| ----- | --- | -------- |
| filter | Object |  |

<a class='md-heading-link' name="the-scene-mixins-function-set-filter-by-q" ></a>

### setFilterByQ()

Set filters by q
<a class='md-heading-link' name="the-scene-mixins-function-with-form" ></a>

### withForm(Class) -> `function`

withForm mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-with-history" ></a>

### withHistory(Class) -> `function`

withHistory mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-replace-history-by-query" ></a>

### replaceHistoryByQuery(query)

Replace history with query

| Param | Type | Description |
| ----- | --- | -------- |
| query | Object | Query data |

<a class='md-heading-link' name="the-scene-mixins-function-with-id" ></a>

### withId(Class) -> `function`

withId mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-get-id" ></a>

### getId() -> `string`

Get id
<a class='md-heading-link' name="the-scene-mixins-function-is-known-id" ></a>

### isKnownId(id) -> `boolean`

Check if the id is known

| Param | Type | Description |
| ----- | --- | -------- |
| id | string |  |

<a class='md-heading-link' name="the-scene-mixins-function-with-limit" ></a>

### withLimit(Class) -> `function`

withLimit mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-get-limit" ></a>

### getLimit() -> `number`

Get limit
<a class='md-heading-link' name="the-scene-mixins-function-next-limit" ></a>

### nextLimit() -> `number`

Next limit
<a class='md-heading-link' name="the-scene-mixins-function-set-limit" ></a>

### setLimit(limit)

Set limit

| Param | Type | Description |
| ----- | --- | -------- |
| limit | number |  |

<a class='md-heading-link' name="the-scene-mixins-function-update-to-next-limit" ></a>

### updateToNextLimit()

Update to next limit
<a class='md-heading-link' name="the-scene-mixins-function-with-location" ></a>

### withLocation(Class) -> `function`

withLocation mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-change-location-to" ></a>

### changeLocationTo(href)

Change location to url

| Param | Type | Description |
| ----- | --- | -------- |
| href | string |  |

<a class='md-heading-link' name="the-scene-mixins-function-get-location-hash" ></a>

### getLocationHash() -> `*`

Get location hash
<a class='md-heading-link' name="the-scene-mixins-function-reload-location" ></a>

### reloadLocation() -> `Promise.<void>`

Reload current location
<a class='md-heading-link' name="the-scene-mixins-function-set-location-hash" ></a>

### setLocationHash(hash)

Set location hash

| Param | Type | Description |
| ----- | --- | -------- |
| hash |  |  |

<a class='md-heading-link' name="the-scene-mixins-function-with-page" ></a>

### withPage(Class) -> `function`

withPage mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-get-page" ></a>

### getPage() -> `Object`

Get page data
<a class='md-heading-link' name="the-scene-mixins-function-with-query" ></a>

### withQuery(Class) -> `function`

withQuery mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-get-query-from-search" ></a>

### getQueryFromSearch(search) -> `Object`

Get query from search

| Param | Type | Description |
| ----- | --- | -------- |
| search | string |  |

<a class='md-heading-link' name="the-scene-mixins-function-merge-query-to-search" ></a>

### mergeQueryToSearch(query)

Merge additional query into search

| Param | Type | Description |
| ----- | --- | -------- |
| query | Object |  |

<a class='md-heading-link' name="the-scene-mixins-function-query-with-search" ></a>

### queryWithSearch(search) -> `object`

Query with search

| Param | Type | Description |
| ----- | --- | -------- |
| search |  | Location search string |

<a class='md-heading-link' name="the-scene-mixins-function-with-ready" ></a>

### withReady(Class) -> `function`

withReady mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-if-ready" ></a>

### ifReady(task) -> `Promise.<*>`

Do only if ready

| Param | Type | Description |
| ----- | --- | -------- |
| task | function |  |

<a class='md-heading-link' name="the-scene-mixins-function-ready-when" ></a>

### readyWhen(task) -> `Promise.<*>`

Set ready when done

| Param | Type | Description |
| ----- | --- | -------- |
| task | function |  |

<a class='md-heading-link' name="the-scene-mixins-function-unless-ready" ></a>

### unlessReady(task) -> `Promise.<*>`

Do unless ready

| Param | Type | Description |
| ----- | --- | -------- |
| task | function |  |

<a class='md-heading-link' name="the-scene-mixins-function-with-result" ></a>

### withResult(Class) -> `function`

withResult mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-result-for" ></a>

### resultFor(action) -> `Promise.<*>`

Do action and store result

| Param | Type | Description |
| ----- | --- | -------- |
| action | function |  |

<a class='md-heading-link' name="the-scene-mixins-function-with-sort" ></a>

### withSort(Class) -> `function`

withSort mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-with-targets" ></a>

### withTargets(Class) -> `function`

withTargets mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-add-targets" ></a>

### addTargets(targets)

Add targets

| Param | Type | Description |
| ----- | --- | -------- |
| targets |  |  |

<a class='md-heading-link' name="the-scene-mixins-function-get-target-ids" ></a>

### getTargetIds() -> `Array.<String>`

Get ids of target
<a class='md-heading-link' name="the-scene-mixins-function-get-target-refs" ></a>

### getTargetRefs() -> `Array.<String>`

Get refs of target
<a class='md-heading-link' name="the-scene-mixins-function-get-targets" ></a>

### getTargets()

Get target values
<a class='md-heading-link' name="the-scene-mixins-function-with-values" ></a>

### withValues(Class) -> `function`

withValues mixin

| Param | Type | Description |
| ----- | --- | -------- |
| Class | function | Class to mix |

<a class='md-heading-link' name="the-scene-mixins-function-as-class-mixin" ></a>

### asClassMixin()

Define as class mixin
<a class='md-heading-link' name="the-scene-mixins-function-as-method-wrap" ></a>

### asMethodWrap()

Define method wrapper
<a class='md-heading-link' name="the-scene-mixins-function-inject-properties" ></a>

### injectProperties(Class) -> `function`



| Param | Type | Description |
| ----- | --- | -------- |
| Class | function |  |





