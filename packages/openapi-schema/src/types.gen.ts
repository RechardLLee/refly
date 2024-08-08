// This file is auto-generated by @hey-api/openapi-ts

/**
 * Refly user
 */
export type User = {
  /**
   * UID
   */
  uid: string;
};

/**
 * Resource metadata
 */
export type ResourceMeta = {
  /**
   * Weblink URL
   */
  url?: string;
  /**
   * Weblink title
   */
  title?: string;
  /**
   * Storage key for the weblink
   * @deprecated
   */
  storageKey?: string;
};

/**
 * Resource type
 */
export type ResourceType = 'weblink' | 'text';

export type Resource = {
  /**
   * Resource ID
   */
  resourceId: string;
  /**
   * Resource type
   */
  resourceType: ResourceType;
  /**
   * Collection ID
   */
  collectionId?: string;
  /**
   * Resource title
   */
  title: string;
  /**
   * Resource metadata
   */
  data?: ResourceMeta;
  /**
   * Resource index status
   */
  indexStatus: IndexStatus;
  /**
   * Whether this resource is public
   */
  isPublic: boolean;
  /**
   * Collection creation time
   */
  createdAt: string;
  /**
   * Collection update time
   */
  updatedAt: string;
  /**
   * Preview content for this resource
   */
  contentPreview?: string;
  /**
   * Document content for this resource (only returned in getNoteDetail API)
   */
  content?: string;
  /**
   * Resource labels
   */
  labels?: Array<LabelInstance>;
};

export type Note = {
  /**
   * Note ID
   */
  noteId: string;
  /**
   * Note title
   */
  title: string;
  /**
   * Note content preview
   */
  contentPreview?: string;
  /**
   * Full note content (only returned in detail api)
   */
  content?: string;
  /**
   * Whether this note is read-only
   */
  readOnly: boolean;
  /**
   * Whether this note is public
   */
  isPublic: boolean;
  /**
   * Note creation time
   */
  createdAt: string;
  /**
   * Note update time
   */
  updatedAt: string;
  /**
   * Note labels
   */
  labels?: Array<LabelInstance>;
};

export type Collection = {
  /**
   * Collection ID
   */
  collectionId: string;
  /**
   * Collection title
   */
  title: string;
  /**
   * Collection description
   */
  description?: string;
  /**
   * Whether this collection is public
   */
  isPublic?: boolean;
  /**
   * Collection creation time
   */
  createdAt: string;
  /**
   * Collection update time
   */
  updatedAt: string;
  /**
   * Collection resources (only returned in detail API)
   */
  resources?: Array<Resource>;
  /**
   * Note labels
   */
  labels?: Array<LabelInstance>;
};

/**
 * Entity type
 */
export type EntityType = 'resource' | 'collection' | 'note';

/**
 * Label class
 */
export type LabelClass = {
  /**
   * Label class ID
   */
  labelClassId: string;
  /**
   * Label class name
   */
  name: string;
  /**
   * Label class display name
   */
  displayName: string;
  /**
   * Label icon
   */
  icon?: string;
  /**
   * Label creation instruction prompt
   */
  prompt?: string;
  /**
   * Label class creation time
   */
  createdAt: string;
  /**
   * Label class update time
   */
  updatedAt: string;
};

/**
 * Label instances related to resources, collections, etc.
 */
export type LabelInstance = {
  /**
   * Label instance ID
   */
  labelId: string;
  /**
   * Label class ID
   */
  labelClassId: string;
  /**
   * Label class
   */
  labelClass?: LabelClass;
  /**
   * Label value
   */
  value: string;
};

/**
 * Skill template
 */
export type SkillTemplate = {
  /**
   * Skill template name
   */
  name?: string;
  /**
   * Skill display name (key is locale and value is display name)
   */
  displayName?: {
    [key: string]: unknown;
  };
  /**
   * Skill description
   */
  description?: string;
  /**
   * JSON schema for config
   */
  configSchema?: {
    [key: string]: unknown;
  };
};

/**
 * Skill trigger type
 */
export type SkillTriggerType = 'event' | 'cron';

/**
 * Event type
 */
export type EventType = 'create' | 'update' | 'delete';

/**
 * Skill triggers
 */
export type SkillTrigger = {
  /**
   * Skill ID
   */
  skillId: string;
  /**
   * Trigger ID
   */
  triggerId: string;
  /**
   * Trigger type
   */
  triggerType: SkillTriggerType;
  /**
   * Event entity type (only required when trigger type is `event`)
   */
  eventEntityType?: EntityType;
  /**
   * Event type (only required when trigger type is `event`)
   */
  eventType?: EventType;
  /**
   * Cron expression
   */
  crontab?: string;
  /**
   * Trigger enabled
   */
  enabled: boolean;
  /**
   * Trigger creation time
   */
  createdAt: string;
  /**
   * Trigger update time
   */
  updatedAt: string;
};

/**
 * Skill metadata
 */
export type SkillMeta = {
  /**
   * Skill name
   */
  skillName: string;
  /**
   * Skill display name
   */
  skillDisplayName: string;
  /**
   * Skill ID
   */
  skillId?: string;
  /**
   * Skill config
   */
  config?: string;
};

/**
 * Skill
 */
export type SkillInstance = SkillMeta & {
  /**
   * Skill triggers
   */
  triggers?: Array<SkillTrigger>;
  /**
   * Skill creation time
   */
  createdAt: string;
  /**
   * Skill update time
   */
  updatedAt: string;
};

/**
 * Skill operation log
 */
export type SkillLog = {
  /**
   * Log ID
   */
  logId: string;
  /**
   * Skill ID
   */
  skillId: string;
  /**
   * Skill name
   */
  skillName: string;
  /**
   * Skill trigger ID
   */
  triggerId?: string;
  /**
   * Skill input
   */
  input: SkillInput;
  /**
   * Skill context
   */
  context: SkillContext;
  /**
   * Log creation time
   */
  createdAt: string;
  /**
   * Log update time
   */
  updatedAt: string;
};

/**
 * Source metadata
 */
export type SourceMeta = {
  /**
   * Source URL
   * @deprecated
   */
  source?: string;
  /**
   * Source title
   * @deprecated
   */
  title?: string;
  /**
   * Source publish time
   */
  publishedTime?: string;
  /**
   * Related collection ID
   */
  collectionId?: string;
  /**
   * Related collection name
   */
  collectionName?: string;
  /**
   * Related resource ID
   */
  resourceId?: string;
  /**
   * Related resource name
   */
  resourceName?: string;
};

/**
 * Source selection
 */
export type SourceSelection = {
  /**
   * Selected xPath
   * @deprecated
   */
  xPath?: string;
  /**
   * Selected content
   */
  content: string;
  /**
   * Selection type
   */
  type: 'text' | 'table' | 'link' | 'image' | 'video' | 'audio';
};

/**
 * Selection type
 */
export type type = 'text' | 'table' | 'link' | 'image' | 'video' | 'audio';

/**
 * Source of the message
 */
export type Source = {
  /**
   * Source URL
   */
  url?: string;
  /**
   * Source title
   */
  title?: string;
  /**
   * Source content
   */
  pageContent: string;
  /**
   * Relativity score
   */
  score?: number;
  /**
   * Source metadata
   */
  metadata?: SourceMeta;
  /**
   * Source selections
   */
  selections?: Array<SourceSelection>;
};

/**
 * Chat message type
 */
export type MessageType = 'ai' | 'human' | 'system';

/**
 * Chat message
 */
export type ChatMessage = {
  /**
   * Message ID
   */
  readonly msgId: string;
  /**
   * Message type
   */
  type: MessageType;
  /**
   * Message content
   */
  content: string;
  /**
   * Skill metadata
   */
  skillMeta?: SkillMeta;
  /**
   * Message logs
   */
  logs?: Array<string>;
  /**
   * Structured data output
   */
  structuredData?: {
    [key: string]: unknown;
  };
  /**
   * Related questions
   * @deprecated
   */
  relatedQuestions?: Array<string>;
  /**
   * Related sources
   * @deprecated
   */
  sources?: Array<Source>;
  /**
   * Selected weblink config (JSON)
   */
  selectedWeblinkConfig?: string;
  /**
   * Message creation time
   */
  createdAt?: string;
  /**
   * Message update time
   */
  updatedAt?: string;
};

/**
 * Conversation list item
 */
export type Conversation = {
  /**
   * Conversation ID
   */
  convId?: string;
  /**
   * Conversation title
   */
  title?: string;
  /**
   * Last message content
   */
  lastMessage?: string;
  /**
   * Number of chat messages in this conversation
   */
  messageCount?: number;
  /**
   * Related content ID
   */
  cid?: string;
  /**
   * Conversation locale
   */
  locale?: string;
  /**
   * Origin page host
   */
  origin?: string;
  /**
   * Origin page title
   */
  originPageTitle?: string;
  /**
   * Origin page url
   */
  originPageUrl?: string;
  /**
   * Conversation creation time
   */
  createdAt?: string;
  /**
   * Conversation creation time
   */
  updatedAt?: string;
  /**
   * Conversation messages (only returned for getConversationDetail api)
   */
  messages?: Array<ChatMessage>;
};

/**
 * Chat task type
 */
export type ChatTaskType =
  | 'chat'
  | 'genTitle'
  | 'quickAction'
  | 'searchEnhanceKeyword'
  | 'searchEnhanceSummarize'
  | 'searchEnhanceAsk';

/**
 * Content retrieval filter
 */
export type RetrieveFilter = {
  /**
   * List of web links
   * @deprecated
   */
  weblinkList?: Array<Source>;
  /**
   * List of URLs to retrieve
   */
  urls?: Array<string>;
  /**
   * List of resource IDs to retrieve
   */
  resourceIds?: Array<string>;
  /**
   * List of collection IDs to retrieve
   */
  collectionIds?: Array<string>;
};

/**
 * Chat payload
 */
export type ChatPayload = {
  /**
   * Question
   */
  question: string;
  /**
   * Content retrieval filter
   */
  filter?: RetrieveFilter;
};

/**
 * Quick action type
 */
export type QuickActionType = 'selection' | 'summary';

/**
 * Quick action task payload
 */
export type QuickActionTaskPayload = {
  /**
   * Question
   */
  question?: string;
  /**
   * Quick action type
   */
  actionType?: QuickActionType;
  /**
   * Prompt for this action
   */
  actionPrompt?: string;
  /**
   * Reference for this action
   */
  reference?: string;
  /**
   * Content retrieval filter
   */
  filter?: RetrieveFilter;
};

/**
 * Chat task
 */
export type ChatTask = {
  /**
   * Task type
   */
  taskType: ChatTaskType;
  /**
   * Whether to dry run the task
   */
  dryRun?: boolean;
  /**
   * Conversation ID, a new conversation will be created if empty or non-existent
   */
  convId?: string;
  /**
   * Create conversation parameters
   */
  createConvParam?: CreateConversationRequest;
  /**
   * Chat locale
   */
  locale?: string;
  /**
   * Chat data
   */
  data?: ChatPayload | QuickActionTaskPayload;
};

/**
 * Chat task response
 */
export type ChatTaskResponse = {
  /**
   * List of web links
   */
  sources: Array<Source>;
  /**
   * Chat Answer
   */
  answer: string;
  /**
   * Related questions
   */
  relatedQuestions?: Array<string>;
};

/**
 * Resource index status
 */
export type IndexStatus = 'init' | 'processing' | 'finish' | 'failed' | 'unavailable';

export type UserSettings = {
  /**
   * User ID
   */
  uid: string;
  /**
   * User avatar
   */
  avatar: string;
  /**
   * User name
   */
  name: string;
  /**
   * User email
   */
  email: string;
  /**
   * Whether email is verified
   */
  emailVerified?: boolean;
  /**
   * User UI locale
   */
  uiLocale?: string;
  /**
   * User output locale
   */
  outputLocale?: string;
};

export type BaseResponse = {
  /**
   * Whether the operation was successful
   */
  success: boolean;
  /**
   * Error message
   */
  errMsg?: string;
};

export type UpsertResourceRequest = {
  /**
   * Resource type
   */
  resourceType: ResourceType;
  /**
   * Resource title
   */
  title?: string;
  /**
   * Resource ID (only used for update)
   */
  resourceId?: string;
  /**
   * Collection ID (will create new collection if empty)
   */
  collectionId?: string;
  /**
   * Collection name
   */
  collectionName?: string;
  /**
   * Resource metadata
   */
  data?: ResourceMeta;
  /**
   * Storage key for the resource
   */
  storageKey?: string;
  /**
   * Resource content (this will be ignored if storageKey was set)
   */
  content?: string;
  /**
   * Whether this resource is public
   */
  isPublic?: boolean;
  /**
   * Whether this resource is read-only
   */
  readOnly?: boolean;
};

export type UpsertResourceResponse = BaseResponse & {
  data?: Resource;
};

export type BatchCreateResourceResponse = BaseResponse & {
  /**
   * Resource list
   */
  data?: Array<Resource>;
};

export type DeleteResourceRequest = {
  /**
   * Resource ID to delete
   */
  resourceId: string;
};

export type ListResourceResponse = BaseResponse & {
  /**
   * Resource list
   */
  data?: Array<Resource>;
};

export type GetResourceDetailResponse = BaseResponse & {
  /**
   * Resource data
   */
  data?: Resource;
};

export type ListNoteResponse = BaseResponse & {
  /**
   * Note list
   */
  data?: Array<Note>;
};

export type GetNoteDetailResponse = BaseResponse & {
  /**
   * Note data
   */
  data?: Note;
};

export type UpsertNoteRequest = {
  /**
   * Note title
   */
  title?: string;
  /**
   * Note ID (only used for update)
   */
  noteId?: string;
  /**
   * Whether this note is read-only
   */
  readOnly?: boolean;
  /**
   * Whether this note is public
   */
  isPublic?: boolean;
};

export type UpsertNoteResponse = BaseResponse & {
  data?: Note;
};

export type DeleteNoteRequest = {
  /**
   * Note ID to delete
   */
  noteId: string;
};

export type UpsertCollectionRequest = {
  /**
   * Collection ID (only used for update)
   */
  collectionId?: string;
  /**
   * Collection title
   */
  title?: string;
  /**
   * Collection description
   */
  description?: string;
  /**
   * Whether this collection is public
   */
  isPublic?: boolean;
};

export type UpsertCollectionResponse = BaseResponse & {
  data?: Collection;
};

export type DeleteCollectionRequest = {
  /**
   * Collection ID to delete
   */
  collectionId: string;
};

export type ListCollectionResponse = BaseResponse & {
  /**
   * Collection list
   */
  data?: Array<Collection>;
};

export type GetCollectionDetailResponse = BaseResponse & {
  /**
   * Collection data
   */
  data?: Collection;
};

export type ListLabelClassesResponse = BaseResponse & {
  /**
   * Label class list
   */
  data?: Array<LabelClass>;
};

export type CreateLabelClassRequest = {
  /**
   * Label class name
   */
  name: string;
  /**
   * Label display name
   */
  displayName: string;
  /**
   * Label icon
   */
  icon?: string;
  /**
   * Label creation instruction prompt
   */
  prompt: string;
};

export type UpdateLabelClassRequest = {
  /**
   * Label class ID
   */
  labelClassId: string;
  /**
   * Label class name
   */
  name?: string;
  /**
   * Label display name
   */
  displayName?: string;
  /**
   * Label icon
   */
  icon?: string;
  /**
   * Label creation instruction prompt
   */
  prompt?: string;
};

export type UpsertLabelClassResponse = BaseResponse & {
  /**
   * Label class upserted
   */
  data?: LabelClass;
};

export type DeleteLabelClassRequest = {
  /**
   * Label class ID to delete
   */
  labelClassId: string;
};

export type ListLabelInstancesResponse = BaseResponse & {
  /**
   * Label list
   */
  data?: Array<LabelInstance>;
};

export type CreateLabelInstanceRequest = {
  /**
   * Label class ID
   */
  labelClassId: string;
  /**
   * Label value list
   */
  valueList: Array<string>;
  /**
   * Label entity type
   */
  entityType: EntityType;
  /**
   * Label entity ID
   */
  entityId: string;
};

export type UpdateLabelInstanceRequest = {
  /**
   * Label ID to update
   */
  labelId?: string;
  /**
   * Updated label value
   */
  value?: string;
};

export type UpsertLabelInstanceResponse = BaseResponse & {
  /**
   * Label instance upserted
   */
  data?: Array<LabelInstance>;
};

export type DeleteLabelInstanceRequest = {
  /**
   * Label ID to delete
   */
  labelId: string;
};

export type ListSkillTemplateResponse = BaseResponse & {
  /**
   * Skill template list
   */
  data?: Array<SkillTemplate>;
};

export type ListSkillInstanceResponse = BaseResponse & {
  /**
   * Skill list
   */
  data?: Array<SkillInstance>;
};

export type SkillInstanceCreateParam = {
  /**
   * Skill name
   */
  skillName: string;
  /**
   * Skill display name
   */
  displayName: string;
  /**
   * Skill config (should conform to template config schema)
   */
  config?: {
    [key: string]: unknown;
  };
};

export type CreateSkillInstanceRequest = {
  /**
   * Skill instances to upsert
   */
  instanceList: Array<SkillInstanceCreateParam>;
};

export type CreateSkillInstanceResponse = BaseResponse & {
  /**
   * Skill instance list
   */
  data?: Array<SkillInstance>;
};

export type UpdateSkillInstanceRequest = {
  /**
   * Skill ID
   */
  skillId: string;
  /**
   * Skill name
   */
  skillName?: string;
  /**
   * Skill display name
   */
  displayName?: string;
  /**
   * Skill config (should conform to template config schema)
   */
  config?: {
    [key: string]: unknown;
  };
};

export type UpdateSkillInstanceResponse = BaseResponse & {
  /**
   * Skill instance list
   */
  data?: SkillInstance;
};

export type DeleteSkillInstanceRequest = {
  /**
   * Skill ID to delete
   */
  skillId: string;
};

/**
 * Skill input
 */
export type SkillInput = {
  /**
   * User query
   */
  query: string;
};

/**
 * Skill invocation context
 */
export type SkillContext = {
  /**
   * User input locale
   */
  locale?: string;
  /**
   * List of resource IDs
   */
  resourceIds?: Array<string>;
  /**
   * List of collection IDs
   */
  collectionIds?: Array<string>;
  /**
   * List of note IDs
   */
  noteIds?: Array<string>;
  /**
   * List of content
   */
  contentList?: Array<string>;
};

export type InvokeSkillRequest = {
  /**
   * Skill input
   */
  input: SkillInput;
  /**
   * Skill invocation context
   */
  context?: SkillContext;
  /**
   * Skill instance ID to invoke (if not provided, skill scheduler will be used)
   */
  skillId?: string;
  /**
   * Skill config (should conform to template config schema)
   */
  config?: {
    [key: string]: unknown;
  };
  /**
   * Conversation ID (will add messages to this conversation if provided)
   */
  convId?: string;
  /**
   * Create conversation parameters
   */
  createConvParam?: CreateConversationRequest;
};

export type InvokeSkillResponse = BaseResponse & {
  /**
   * Skill log id
   */
  logId?: string;
};

export type ListSkillTriggerResponse = BaseResponse & {
  /**
   * Skill trigger list
   */
  data?: Array<SkillTrigger>;
};

export type SkillTriggerCreateParam = {
  /**
   * Skill ID
   */
  skillId: string;
  /**
   * Trigger type
   */
  triggerType: SkillTriggerType;
  /**
   * Event entity type (only required when trigger type is `event`)
   */
  eventEntityType?: EntityType;
  /**
   * Event type (only required when trigger type is `event`)
   */
  eventType?: EventType;
  /**
   * Trigger crontab (only valid when event is `cron`)
   */
  crontab?: string;
  /**
   * Whether this trigger is enabled
   */
  enabled?: boolean;
};

export type CreateSkillTriggerRequest = {
  /**
   * Skill triggers to upsert
   */
  triggerList: Array<SkillTriggerCreateParam>;
};

export type CreateSkillTriggerResponse = BaseResponse & {
  /**
   * Skill trigger list
   */
  data?: Array<SkillTrigger>;
};

export type UpdateSkillTriggerRequest = {
  /**
   * Trigger ID (only used for update)
   */
  triggerId: string;
  /**
   * Trigger type
   */
  triggerType?: SkillTriggerType;
  /**
   * Event entity type (only required when trigger type is `event`)
   */
  eventEntityType?: EntityType;
  /**
   * Event type (only required when trigger type is `event`)
   */
  eventType?: EventType;
  /**
   * Trigger crontab (only valid when event is `cron`)
   */
  crontab?: string;
  /**
   * Whether this trigger is enabled
   */
  enabled?: boolean;
};

export type UpdateSkillTriggerResponse = BaseResponse & {
  /**
   * Updated skill trigger
   */
  data?: SkillTrigger;
};

export type DeleteSkillTriggerRequest = {
  /**
   * Trigger ID to delete
   */
  triggerId: string;
};

export type ListSkillLogResponse = BaseResponse & {
  /**
   * Skill log list
   */
  data?: Array<SkillLog>;
};

export type CreateConversationRequest = {
  /**
   * Conversation title
   */
  title?: string;
  /**
   * Conversation locale
   */
  locale?: string;
  /**
   * Origin page host
   */
  origin?: string;
  /**
   * Origin page title
   */
  originPageTitle?: string;
  /**
   * Origin page url
   */
  originPageUrl?: string;
};

export type CreateConversationResponse = BaseResponse & {
  /**
   * Created conversation
   */
  data?: Conversation;
};

export type ListConversationResponse = BaseResponse & {
  /**
   * Conversation list
   */
  data?: Array<Conversation>;
};

export type ChatRequest = {
  /**
   * chat task config
   */
  task?: ChatTask;
};

export type GetConversationDetailResponse = BaseResponse & {
  /**
   * Conversation data
   */
  data?: Conversation;
};

export type UpdateUserSettingsRequest = {
  /**
   * UI locale
   */
  uiLocale?: string;
  /**
   * Output locale
   */
  outputLocale?: string;
};

export type SearchDomain = 'resource' | 'note' | 'collection' | 'conversation' | 'skill';

export type SearchMode = 'keyword' | 'vector' | 'hybrid';

export type SearchRequest = {
  /**
   * Search query (if empty, return last updated data)
   */
  query: string;
  /**
   * Search scope
   */
  scope?: 'user' | 'public';
  /**
   * Search domains (if not specified, return all domains)
   */
  domains?: Array<SearchDomain>;
  /**
   * Search mode
   */
  mode?: SearchMode;
  /**
   * Search result limit for each domain
   */
  limit?: number;
};

/**
 * Search scope
 */
export type scope = 'user' | 'public';

export type SearchResultMeta = {
  /**
   * Resource type
   */
  resourceType?: ResourceType;
  /**
   * Resource metadata
   */
  resourceMeta?: ResourceMeta;
  /**
   * Collection ID
   */
  collectionId?: string;
};

export type SearchResult = {
  /**
   * Search result ID to navigate to
   */
  id: string;
  /**
   * Search result domain
   */
  domain: SearchDomain;
  /**
   * Search result title
   */
  title: string;
  /**
   * Search result content list with highlight marks
   */
  content?: Array<string>;
  /**
   * Search result metadata
   */
  metadata?: SearchResultMeta;
  /**
   * Data creation time
   */
  createdAt?: string;
  /**
   * Collection creation time
   */
  updatedAt?: string;
};

export type SearchResponse = BaseResponse & {
  /**
   * Search result
   */
  data?: Array<SearchResult>;
};

export type ListResourcesData = {
  query?: {
    /**
     * Target collection ID
     */
    collectionId?: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
    /**
     * Resource ID
     */
    resourceId?: string;
    /**
     * Resource type
     */
    resourceType?: ResourceType;
  };
};

export type ListResourcesResponse = ListResourceResponse;

export type ListResourcesError = unknown;

export type GetResourceDetailData = {
  query: {
    /**
     * Resource ID to retrieve
     */
    resourceId: string;
  };
};

export type GetResourceDetailResponse2 = GetResourceDetailResponse;

export type GetResourceDetailError = unknown;

export type UpdateResourceData = {
  /**
   * Resource update request
   */
  body: UpsertResourceRequest;
};

export type UpdateResourceResponse = UpsertResourceResponse;

export type UpdateResourceError = unknown;

export type CreateResourceData = {
  /**
   * Resource creation request
   */
  body: UpsertResourceRequest;
};

export type CreateResourceResponse = UpsertResourceResponse;

export type CreateResourceError = unknown;

export type BatchCreateResourceData = {
  /**
   * Resource creation request
   */
  body: Array<UpsertResourceRequest>;
};

export type BatchCreateResourceResponse2 = UpsertResourceResponse;

export type BatchCreateResourceError = unknown;

export type DeleteResourceData = {
  body: DeleteResourceRequest;
};

export type DeleteResourceResponse = BaseResponse;

export type DeleteResourceError = unknown;

export type ListNotesData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
  };
};

export type ListNotesResponse = ListNoteResponse;

export type ListNotesError = unknown;

export type GetNoteDetailData = {
  query: {
    /**
     * Note ID to retrieve
     */
    noteId: string;
  };
};

export type GetNoteDetailResponse2 = GetNoteDetailResponse;

export type GetNoteDetailError = unknown;

export type UpdateNoteData = {
  /**
   * Note update request
   */
  body: UpsertNoteRequest;
};

export type UpdateNoteResponse = UpsertNoteResponse;

export type UpdateNoteError = unknown;

export type CreateNoteData = {
  /**
   * Note creation request
   */
  body: UpsertNoteRequest;
};

export type CreateNoteResponse = UpsertNoteResponse;

export type CreateNoteError = unknown;

export type DeleteNoteData = {
  body: DeleteNoteRequest;
};

export type DeleteNoteResponse = BaseResponse;

export type DeleteNoteError = unknown;

export type ListCollectionsData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
  };
};

export type ListCollectionsResponse = ListCollectionResponse;

export type ListCollectionsError = unknown;

export type GetCollectionDetailData = {
  query: {
    /**
     * Collection ID to retrieve
     */
    collectionId: string;
  };
};

export type GetCollectionDetailResponse2 = GetCollectionDetailResponse;

export type GetCollectionDetailError = unknown;

export type UpdateCollectionData = {
  /**
   * Collection update request
   */
  body: UpsertCollectionRequest;
};

export type UpdateCollectionResponse = BaseResponse;

export type UpdateCollectionError = unknown;

export type CreateCollectionData = {
  /**
   * Collection creation request
   */
  body: UpsertCollectionRequest;
};

export type CreateCollectionResponse = BaseResponse;

export type CreateCollectionError = unknown;

export type DeleteCollectionData = {
  body: DeleteCollectionRequest;
};

export type DeleteCollectionResponse = BaseResponse;

export type DeleteCollectionError = unknown;

export type ListLabelClassesData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
  };
};

export type ListLabelClassesResponse2 = ListLabelClassesResponse;

export type ListLabelClassesError = unknown;

export type CreateLabelClassData = {
  /**
   * Label class creation request
   */
  body: CreateLabelClassRequest;
};

export type CreateLabelClassResponse = UpsertLabelClassResponse;

export type CreateLabelClassError = unknown;

export type UpdateLabelClassData = {
  /**
   * Label class update request
   */
  body: UpdateLabelClassRequest;
};

export type UpdateLabelClassResponse = UpsertLabelClassResponse;

export type UpdateLabelClassError = unknown;

export type DeleteLabelClassData = {
  body: DeleteLabelClassRequest;
};

export type DeleteLabelClassResponse = BaseResponse;

export type DeleteLabelClassError = unknown;

export type ListLabelInstancesData = {
  query?: {
    /**
     * Label class ID
     */
    classId?: string;
    /**
     * Entity type to retrieve
     */
    entityId?: string;
    /**
     * Entity type to retrieve
     */
    entityType?: EntityType;
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
    /**
     * Label value
     */
    value?: string;
  };
};

export type ListLabelInstancesResponse2 = ListLabelInstancesResponse;

export type ListLabelInstancesError = unknown;

export type CreateLabelInstanceData = {
  /**
   * Label instance creation request
   */
  body: CreateLabelInstanceRequest;
};

export type CreateLabelInstanceResponse = UpsertLabelInstanceResponse;

export type CreateLabelInstanceError = unknown;

export type UpdateLabelInstanceData = {
  /**
   * Label update request
   */
  body: UpdateLabelInstanceRequest;
};

export type UpdateLabelInstanceResponse = UpsertLabelInstanceResponse;

export type UpdateLabelInstanceError = unknown;

export type DeleteLabelInstanceData = {
  body: DeleteLabelInstanceRequest;
};

export type DeleteLabelInstanceResponse = BaseResponse;

export type DeleteLabelInstanceError = unknown;

export type ListSkillTemplatesData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
  };
};

export type ListSkillTemplatesResponse = ListSkillTemplateResponse;

export type ListSkillTemplatesError = unknown;

export type ListSkillInstancesData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
    /**
     * Skill ID
     */
    skillId?: string;
  };
};

export type ListSkillInstancesResponse = ListSkillInstanceResponse;

export type ListSkillInstancesError = unknown;

export type CreateSkillInstanceData = {
  /**
   * Skill creation request
   */
  body: CreateSkillInstanceRequest;
};

export type CreateSkillInstanceResponse2 = CreateSkillInstanceResponse;

export type CreateSkillInstanceError = unknown;

export type UpdateSkillInstanceData = {
  /**
   * Skill update request
   */
  body: UpdateSkillInstanceRequest;
};

export type UpdateSkillInstanceResponse2 = UpdateSkillInstanceResponse;

export type UpdateSkillInstanceError = unknown;

export type DeleteSkillInstanceData = {
  body: DeleteSkillInstanceRequest;
};

export type DeleteSkillInstanceResponse = BaseResponse;

export type DeleteSkillInstanceError = unknown;

export type InvokeSkillData = {
  /**
   * Skill invocation request
   */
  body: InvokeSkillRequest;
};

export type InvokeSkillResponse2 = InvokeSkillResponse;

export type InvokeSkillError = unknown;

export type StreamInvokeSkillData = {
  /**
   * Skill invocation request
   */
  body: InvokeSkillRequest;
};

export type StreamInvokeSkillResponse = string;

export type StreamInvokeSkillError = unknown;

export type ListSkillTriggersData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
    /**
     * Skill ID
     */
    skillId?: string;
  };
};

export type ListSkillTriggersResponse = ListSkillTriggerResponse;

export type ListSkillTriggersError = unknown;

export type CreateSkillTriggerData = {
  /**
   * Skill trigger creation request
   */
  body: CreateSkillTriggerRequest;
};

export type CreateSkillTriggerResponse2 = CreateSkillTriggerResponse;

export type CreateSkillTriggerError = unknown;

export type UpdateSkillTriggerData = {
  /**
   * Skill trigger update request
   */
  body: UpdateSkillTriggerRequest;
};

export type UpdateSkillTriggerResponse2 = UpdateSkillTriggerResponse;

export type UpdateSkillTriggerError = unknown;

export type DeleteSkillTriggerData = {
  body: DeleteSkillTriggerRequest;
};

export type DeleteSkillTriggerResponse = BaseResponse;

export type DeleteSkillTriggerError = unknown;

export type ListSkillLogsData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
    /**
     * Skill ID
     */
    skillId?: string;
  };
};

export type ListSkillLogsResponse = ListSkillLogResponse;

export type ListSkillLogsError = unknown;

export type ListConversationsResponse = ListConversationResponse;

export type ListConversationsError = unknown;

export type GetConversationDetailData = {
  path: {
    /**
     * Conversation ID
     */
    convId: string;
  };
};

export type GetConversationDetailResponse2 = GetConversationDetailResponse;

export type GetConversationDetailError = unknown;

export type GetSettingsResponse = UserSettings;

export type GetSettingsError = unknown;

export type UpdateSettingsData = {
  body: UpdateUserSettingsRequest;
};

export type UpdateSettingsResponse = BaseResponse;

export type UpdateSettingsError = unknown;

export type SearchData = {
  body: SearchRequest;
};

export type SearchResponse2 = SearchResponse;

export type SearchError = unknown;

export type $OpenApiTs = {
  '/knowledge/resource/list': {
    get: {
      req: ListResourcesData;
      res: {
        /**
         * Successful operation
         */
        '200': ListResourceResponse;
      };
    };
  };
  '/knowledge/resource/detail': {
    get: {
      req: GetResourceDetailData;
      res: {
        /**
         * successful operation
         */
        '200': GetResourceDetailResponse;
      };
    };
  };
  '/knowledge/resource/update': {
    post: {
      req: UpdateResourceData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertResourceResponse;
      };
    };
  };
  '/knowledge/resource/new': {
    post: {
      req: CreateResourceData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertResourceResponse;
      };
    };
  };
  '/knowledge/resource/batch': {
    post: {
      req: BatchCreateResourceData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertResourceResponse;
      };
    };
  };
  '/knowledge/resource/delete': {
    post: {
      req: DeleteResourceData;
      res: {
        /**
         * Successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/knowledge/note/list': {
    get: {
      req: ListNotesData;
      res: {
        /**
         * Successful operation
         */
        '200': ListNoteResponse;
      };
    };
  };
  '/knowledge/note/detail': {
    get: {
      req: GetNoteDetailData;
      res: {
        /**
         * Successful operation
         */
        '200': GetNoteDetailResponse;
      };
    };
  };
  '/knowledge/note/update': {
    post: {
      req: UpdateNoteData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertNoteResponse;
      };
    };
  };
  '/knowledge/note/new': {
    post: {
      req: CreateNoteData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertNoteResponse;
      };
    };
  };
  '/knowledge/note/delete': {
    post: {
      req: DeleteNoteData;
      res: {
        /**
         * Successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/knowledge/collection/list': {
    get: {
      req: ListCollectionsData;
      res: {
        /**
         * Successful operation
         */
        '200': ListCollectionResponse;
      };
    };
  };
  '/knowledge/collection/detail': {
    get: {
      req: GetCollectionDetailData;
      res: {
        /**
         * successful operation
         */
        '200': GetCollectionDetailResponse;
      };
    };
  };
  '/knowledge/collection/update': {
    post: {
      req: UpdateCollectionData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/knowledge/collection/new': {
    post: {
      req: CreateCollectionData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/knowledge/collection/delete': {
    post: {
      req: DeleteCollectionData;
      res: {
        /**
         * Successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/label/class/list': {
    get: {
      req: ListLabelClassesData;
      res: {
        /**
         * successful operation
         */
        '200': ListLabelClassesResponse;
      };
    };
  };
  '/label/class/new': {
    post: {
      req: CreateLabelClassData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertLabelClassResponse;
      };
    };
  };
  '/label/class/update': {
    post: {
      req: UpdateLabelClassData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertLabelClassResponse;
      };
    };
  };
  '/label/class/delete': {
    post: {
      req: DeleteLabelClassData;
      res: {
        /**
         * Successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/label/instance/list': {
    get: {
      req: ListLabelInstancesData;
      res: {
        /**
         * successful operation
         */
        '200': ListLabelInstancesResponse;
      };
    };
  };
  '/label/instance/new': {
    post: {
      req: CreateLabelInstanceData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertLabelInstanceResponse;
      };
    };
  };
  '/label/instance/update': {
    post: {
      req: UpdateLabelInstanceData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertLabelInstanceResponse;
      };
    };
  };
  '/label/instance/delete': {
    post: {
      req: DeleteLabelInstanceData;
      res: {
        /**
         * Successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/skill/template/list': {
    get: {
      req: ListSkillTemplatesData;
      res: {
        /**
         * successful operation
         */
        '200': ListSkillTemplateResponse;
      };
    };
  };
  '/skill/instance/list': {
    get: {
      req: ListSkillInstancesData;
      res: {
        /**
         * successful operation
         */
        '200': ListSkillInstanceResponse;
      };
    };
  };
  '/skill/instance/new': {
    post: {
      req: CreateSkillInstanceData;
      res: {
        /**
         * successful operation
         */
        '200': CreateSkillInstanceResponse;
      };
    };
  };
  '/skill/instance/update': {
    post: {
      req: UpdateSkillInstanceData;
      res: {
        /**
         * successful operation
         */
        '200': UpdateSkillInstanceResponse;
      };
    };
  };
  '/skill/instance/delete': {
    post: {
      req: DeleteSkillInstanceData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/skill/invoke': {
    post: {
      req: InvokeSkillData;
      res: {
        /**
         * successful operation
         */
        '200': InvokeSkillResponse;
      };
    };
  };
  '/skill/streamInvoke': {
    post: {
      req: StreamInvokeSkillData;
      res: {
        /**
         * successful operation
         */
        '200': string;
      };
    };
  };
  '/skill/trigger/list': {
    get: {
      req: ListSkillTriggersData;
      res: {
        /**
         * successful operation
         */
        '200': ListSkillTriggerResponse;
      };
    };
  };
  '/skill/trigger/new': {
    post: {
      req: CreateSkillTriggerData;
      res: {
        /**
         * successful operation
         */
        '200': CreateSkillTriggerResponse;
      };
    };
  };
  '/skill/trigger/update': {
    post: {
      req: UpdateSkillTriggerData;
      res: {
        /**
         * successful operation
         */
        '200': UpdateSkillTriggerResponse;
      };
    };
  };
  '/skill/trigger/delete': {
    post: {
      req: DeleteSkillTriggerData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/skill/log/list': {
    get: {
      req: ListSkillLogsData;
      res: {
        /**
         * successful operation
         */
        '200': ListSkillLogResponse;
      };
    };
  };
  '/conversation/list': {
    get: {
      res: {
        /**
         * successful operation
         */
        '200': ListConversationResponse;
      };
    };
  };
  '/conversation/{convId}': {
    get: {
      req: GetConversationDetailData;
      res: {
        /**
         * successful operation
         */
        '200': GetConversationDetailResponse;
      };
    };
  };
  '/user/settings': {
    get: {
      res: {
        /**
         * successful operation
         */
        '200': UserSettings;
      };
    };
    put: {
      req: UpdateSettingsData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/search': {
    post: {
      req: SearchData;
      res: {
        /**
         * successful operation
         */
        '200': SearchResponse;
      };
    };
  };
};
