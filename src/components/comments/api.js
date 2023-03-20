export const getComments = async () => {
  return [
    {
      id: "1",
      body: "I love this Pet Shop!",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2023-03-19T17:36:03+00:00",
    },
    {
      id: "2",
      body: "Awesome experience overall",
      username: "Jules",
      userId: "2",
      parentId: null,
      createdAt: "2023-03-19T17:36:03+00:00",
    },
    {
      id: "3",
      body: "I would recommend them anytime",
      username: "John",
      userId: "3",
      parentId: null,
      createdAt: "2023-03-19T17:36:03+00:00",
    },
    {
      id: "4",
      body: "Awesome service and great team",
      username: "Martha",
      userId: "4",
      parentId: null,
      createdAt: "2023-03-19T17:36:03+00:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    // username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
