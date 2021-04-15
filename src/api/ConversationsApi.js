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
 * Conversations service.
 * @module api/ConversationsApi
 */

/**
 * Constructs a new ConversationsApi. 
 * @alias module:api/ConversationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * List conversations
   * Get a list of conversations for the account.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {module:model/String} opts.hasUnreadMessages Whether the conversation has any unread messages.
   * @param {String} opts.listId The unique id for the list.
   * @param {String} opts.campaignId The unique id for the campaign.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TrackedConversations} and HTTP response
   */
  this.listWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset'],
      'has_unread_messages': opts['hasUnreadMessages'],
      'list_id': opts['listId'],
      'campaign_id': opts['campaignId']
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
      '/conversations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List conversations
   * Get a list of conversations for the account.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {module:model/String} opts.hasUnreadMessages Whether the conversation has any unread messages.
   * @param {String} opts.listId The unique id for the list.
   * @param {String} opts.campaignId The unique id for the campaign.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TrackedConversations}
   */
  this.list = function(opts) {
    return this.listWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get conversation
   * Get details about an individual conversation.
   * @param {String} conversationId The unique id for the conversation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Conversation} and HTTP response
   */
  this.getWithHttpInfo = function(conversationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'conversationId' is set
    if (conversationId === undefined || conversationId === null) {
      throw new Error("Missing the required parameter 'conversationId' when calling ");
    }

    var pathParams = {
      'conversation_id': conversationId
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
      '/conversations/{conversation_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get conversation
   * Get details about an individual conversation.
   * @param {String} conversationId The unique id for the conversation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Conversation}
   */
  this.get = function(conversationId, opts) {
    return this.getWithHttpInfo(conversationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List messages
   * Get messages from a specific conversation.
   * @param {String} conversationId The unique id for the conversation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {module:model/String} opts.isRead Whether a conversation message has been marked as read.
   * @param {Date} opts.beforeTimestamp Restrict the response to messages created before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {Date} opts.sinceTimestamp Restrict the response to messages created after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfConversationMessages} and HTTP response
   */
  this.getConversationMessagesWithHttpInfo = function(conversationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'conversationId' is set
    if (conversationId === undefined || conversationId === null) {
      throw new Error("Missing the required parameter 'conversationId' when calling ");
    }

    var pathParams = {
      'conversation_id': conversationId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'is_read': opts['isRead'],
      'before_timestamp': opts['beforeTimestamp'],
      'since_timestamp': opts['sinceTimestamp']
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
      '/conversations/{conversation_id}/messages', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List messages
   * Get messages from a specific conversation.
   * @param {String} conversationId The unique id for the conversation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {module:model/String} opts.isRead Whether a conversation message has been marked as read.
   * @param {Date} opts.beforeTimestamp Restrict the response to messages created before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {Date} opts.sinceTimestamp Restrict the response to messages created after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfConversationMessages}
   */
  this.getConversationMessages = function(conversationId, opts) {
    return this.getConversationMessagesWithHttpInfo(conversationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get message
   * Get an individual message in a conversation.
   * @param {String} conversationId The unique id for the conversation.
   * @param {String} messageId The unique id for the conversation message.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConversationMessage} and HTTP response
   */
  this.getConversationMessageWithHttpInfo = function(conversationId, messageId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'conversationId' is set
    if (conversationId === undefined || conversationId === null) {
      throw new Error("Missing the required parameter 'conversationId' when calling ");
    }

    // verify the required parameter 'messageId' is set
    if (messageId === undefined || messageId === null) {
      throw new Error("Missing the required parameter 'messageId' when calling ");
    }

    var pathParams = {
      'conversation_id': conversationId,
      'message_id': messageId
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
      '/conversations/{conversation_id}/messages/{message_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get message
   * Get an individual message in a conversation.
   * @param {String} conversationId The unique id for the conversation.
   * @param {String} messageId The unique id for the conversation message.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConversationMessage}
   */
  this.getConversationMessage = function(conversationId, messageId, opts) {
    return this.getConversationMessageWithHttpInfo(conversationId, messageId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Post message
   * Post a new message to a conversation.
   * @param {String} conversationId The unique id for the conversation.
   * @param {module:model/ConversationMessage1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConversationMessage} and HTTP response
   */
  this.createConversationMessageWithHttpInfo = function(conversationId, body) {
    var postBody = body;

    // verify the required parameter 'conversationId' is set
    if (conversationId === undefined || conversationId === null) {
      throw new Error("Missing the required parameter 'conversationId' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'conversation_id': conversationId
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
      '/conversations/{conversation_id}/messages', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Post message
   * Post a new message to a conversation.
   * @param {String} conversationId The unique id for the conversation.
   * @param {module:model/ConversationMessage1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConversationMessage}
   */
  this.createConversationMessage = function(conversationId, body) {
    return this.createConversationMessageWithHttpInfo(conversationId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
