import React from "react";

const commentsData = [
  {
    name: "shyam kumar",
    text: "this is comment for the video.",
    replise: [],
  },
  {
    name: "shyam kumar",
    text: "this is comment for the video.",
    replise: [
      {
        name: "shyam kumar",
        text: "this is comment for the video.",
        replise: [],
      },
      {
        name: "shyam kumar",
        text: "this is comment for the video.",
        replise: [],
      },
      {
        name: "shyam kumar",
        text: "this is comment for the video.",
        replise: [
          {
            name: "shyam kumar",
            text: "this is comment for the video.",
            replise: [
              {
                name: "shyam kumar",
                text: "this is comment for the video.",
                replise: [
                  {
                    name: "shyam kumar",
                    text: "this is comment for the video.",
                    replise: [
                      {
                        name: "shyam kumar",
                        text: "this is comment for the video.",
                        replise: [],
                      },
                      {
                        name: "shyam kumar",
                        text: "this is comment for the video.",
                        replise: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "shyam kumar",
    text: "this is comment for the video.",
    replise: [],
  },
  {
    name: "shyam kumar",
    text: "this is comment for the video.",
    replise: [],
  },
  {
    name: "shyam kumar",
    text: "this is comment for the video.",
    replise: [],
  },
  {
    name: "shyam kumar",
    text: "this is comment for the video.",
    replise: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex pt-3 bg-gray-100 rounded-xl items-center ">
      <img
        className="w-8 h-8 rounded-2xl"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVR3TjkaFI32k7M8OGMye32jOxry45evTmjw&s"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({comments}) => {

  return <div>
    {
      comments.map((comment,index) =>{
        return <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border-l border-black ml-5">
              <CommentList comments={comment.replise}/>
            </div>
        </div>
        
      })
    }
  </div>
}

function CommentsContainer() {
  return (
    <div className="m-5 px-20">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData}/>
    </div>
  );
}

export default CommentsContainer;
