# sync_require
A hackish *real* browser side require function.

This (of course) uses XMLHttpRequest in synchronous mode.
The problem with this is that: a) Synchronous XMLHttpRequests are deprecated, and b) if the network or the server, etc is slow, it WILL hang the UI.
