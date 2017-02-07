# ng-starter

## Notes regarding integration of angular-starter and gv-ew

- Moved src to client/src and created client/dist to better parallel
  server/... under gv-ew.

- Left angular node modules in project root folder so that they
  can be shared with server (for angular-universal rendering of
  templates on the server side).

- Switched package.json dependency from Typescript ~2.0.10 to ~2.1.4
  to equal what is currently used in gv-ew.



