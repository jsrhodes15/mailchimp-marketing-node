/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.40
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * FileManager service.
 * @module api/FileManagerApi
 */

/**
 * Constructs a new FileManagerApi. 
 * @alias module:api/FileManagerApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Delete file
   * Remove a specific file from the File Manager.
   * @param {String} fileId The unique id for the File Manager file.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.deleteFileWithHttpInfo = function(fileId) {
    var postBody = null;

    // verify the required parameter 'fileId' is set
    if (fileId === undefined || fileId === null) {
      throw new Error("Missing the required parameter 'fileId' when calling ");
    }

    var pathParams = {
      'file_id': fileId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/files/{file_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete file
   * Remove a specific file from the File Manager.
   * @param {String} fileId The unique id for the File Manager file.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.deleteFile = function(fileId) {
    return this.deleteFileWithHttpInfo(fileId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Delete folder
   * Delete a specific folder in the File Manager.
   * @param {String} folderId The unique id for the File Manager folder.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.deleteFolderWithHttpInfo = function(folderId) {
    var postBody = null;

    // verify the required parameter 'folderId' is set
    if (folderId === undefined || folderId === null) {
      throw new Error("Missing the required parameter 'folderId' when calling ");
    }

    var pathParams = {
      'folder_id': folderId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/folders/{folder_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete folder
   * Delete a specific folder in the File Manager.
   * @param {String} folderId The unique id for the File Manager folder.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.deleteFolder = function(folderId) {
    return this.deleteFolderWithHttpInfo(folderId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List stored files
   * Get a list of available images and files stored in the File Manager for the account.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {String} opts.type The file type for the File Manager file.
   * @param {String} opts.createdBy The Mailchimp account user who created the File Manager file.
   * @param {String} opts.beforeCreatedAt Restrict the response to files created before the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {String} opts.sinceCreatedAt Restrict the response to files created after the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileManager} and HTTP response
   */
  this.filesWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset'],
      'type': opts['type'],
      'created_by': opts['createdBy'],
      'before_created_at': opts['beforeCreatedAt'],
      'since_created_at': opts['sinceCreatedAt'],
      'sort_field': opts['sortField'],
      'sort_dir': opts['sortDir']
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/files', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List stored files
   * Get a list of available images and files stored in the File Manager for the account.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {String} opts.type The file type for the File Manager file.
   * @param {String} opts.createdBy The Mailchimp account user who created the File Manager file.
   * @param {String} opts.beforeCreatedAt Restrict the response to files created before the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {String} opts.sinceCreatedAt Restrict the response to files created after the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileManager}
   */
  this.files = function(opts) {
    return this.filesWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get file
   * Get information about a specific file in the File Manager.
   * @param {String} fileId The unique id for the File Manager file.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFile} and HTTP response
   */
  this.getFileWithHttpInfo = function(fileId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'fileId' is set
    if (fileId === undefined || fileId === null) {
      throw new Error("Missing the required parameter 'fileId' when calling ");
    }

    var pathParams = {
      'file_id': fileId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/files/{file_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get file
   * Get information about a specific file in the File Manager.
   * @param {String} fileId The unique id for the File Manager file.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFile}
   */
  this.getFile = function(fileId, opts) {
    return this.getFileWithHttpInfo(fileId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List folders
   * Get a list of all folders in the File Manager.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {String} opts.createdBy The Mailchimp account user who created the File Manager file.
   * @param {String} opts.beforeCreatedAt Restrict the response to files created before the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {String} opts.sinceCreatedAt Restrict the response to files created after the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileManagerFolders} and HTTP response
   */
  this.listFoldersWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset'],
      'created_by': opts['createdBy'],
      'before_created_at': opts['beforeCreatedAt'],
      'since_created_at': opts['sinceCreatedAt']
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/folders', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List folders
   * Get a list of all folders in the File Manager.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {String} opts.createdBy The Mailchimp account user who created the File Manager file.
   * @param {String} opts.beforeCreatedAt Restrict the response to files created before the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {String} opts.sinceCreatedAt Restrict the response to files created after the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileManagerFolders}
   */
  this.listFolders = function(opts) {
    return this.listFoldersWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get folder
   * Get information about a specific folder in the File Manager.
   * @param {String} folderId The unique id for the File Manager folder.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFolder} and HTTP response
   */
  this.getFolderWithHttpInfo = function(folderId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'folderId' is set
    if (folderId === undefined || folderId === null) {
      throw new Error("Missing the required parameter 'folderId' when calling ");
    }

    var pathParams = {
      'folder_id': folderId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/folders/{folder_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get folder
   * Get information about a specific folder in the File Manager.
   * @param {String} folderId The unique id for the File Manager folder.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFolder}
   */
  this.getFolder = function(folderId, opts) {
    return this.getFolderWithHttpInfo(folderId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Update file
   * Update a file in the File Manager.
   * @param {String} fileId The unique id for the File Manager file.
   * @param {module:model/GalleryFile2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFile} and HTTP response
   */
  this.updateFileWithHttpInfo = function(fileId, body) {
    var postBody = body;

    // verify the required parameter 'fileId' is set
    if (fileId === undefined || fileId === null) {
      throw new Error("Missing the required parameter 'fileId' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'file_id': fileId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/files/{file_id}', 'PATCH',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Update file
   * Update a file in the File Manager.
   * @param {String} fileId The unique id for the File Manager file.
   * @param {module:model/GalleryFile2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFile}
   */
  this.updateFile = function(fileId, body) {
    return this.updateFileWithHttpInfo(fileId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Update folder
   * Update a specific File Manager folder.
   * @param {String} folderId The unique id for the File Manager folder.
   * @param {module:model/GalleryFolder2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFolder} and HTTP response
   */
  this.updateFolderWithHttpInfo = function(folderId, body) {
    var postBody = body;

    // verify the required parameter 'folderId' is set
    if (folderId === undefined || folderId === null) {
      throw new Error("Missing the required parameter 'folderId' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'folder_id': folderId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/folders/{folder_id}', 'PATCH',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Update folder
   * Update a specific File Manager folder.
   * @param {String} folderId The unique id for the File Manager folder.
   * @param {module:model/GalleryFolder2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFolder}
   */
  this.updateFolder = function(folderId, body) {
    return this.updateFolderWithHttpInfo(folderId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Add file
   * Upload a new image or file to the File Manager.
   * @param {module:model/GalleryFile1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFile} and HTTP response
   */
  this.uploadWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/files', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Add file
   * Upload a new image or file to the File Manager.
   * @param {module:model/GalleryFile1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFile}
   */
  this.upload = function(body) {
    return this.uploadWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Add folder
   * Create a new folder in the File Manager.
   * @param {module:model/GalleryFolder1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFolder} and HTTP response
   */
  this.createFolderWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/file-manager/folders', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Add folder
   * Create a new folder in the File Manager.
   * @param {module:model/GalleryFolder1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFolder}
   */
  this.createFolder = function(body) {
    return this.createFolderWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
