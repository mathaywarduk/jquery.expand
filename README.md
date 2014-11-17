js.expand
=========

jQuery based snippet which causes HTML ```<textarea>``` elements to expand vertically on focus.

## Usage

Include jQuery and Expand in HTML

```
    <script type="text/javascript" src="lib/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="expand.min.js"></script>
```

Add data-attributes to ```<textarea>``` elements where necessary

| Attribute |          |                  |
|----------------------|----------|---------------------------------------|
| data-expand | required | Marks textarea to be expanded   |
| data-expand-class | optional | Sets class prefix for style. Default is ```expand__``` |

See /demo directory for an example.

## Dependencies

* jQuery version 1.9.0 or above 