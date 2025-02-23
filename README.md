# Express.js JSON Body Parsing Issue with Large Payloads

This repository demonstrates a common issue encountered in Express.js applications when handling large JSON payloads.  The problem arises when the incoming JSON request body exceeds the default size limit imposed by the `express.json()` middleware.

## Problem Description

The provided `bug.js` file showcases a simple Express.js application that attempts to parse a JSON body.  When a large JSON payload is sent to the `/data` POST endpoint, the application fails to parse the body correctly, resulting in an error. This is due to the default body size limit, which is typically quite small (100kb).  The application doesn't gracefully handle this limit.

## Solution

The `bugSolution.js` file provides a solution by configuring the `express.json()` middleware to increase the `limit` property to a larger value. This allows the server to handle larger JSON payloads successfully. The solution also includes better error handling to gracefully respond to excessively large requests. 