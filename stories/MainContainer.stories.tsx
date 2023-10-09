import React from 'react';
import { Meta, Story } from '@storybook/react';
import MainContainer, { Props } from '../src/main-container';
import styled from 'styled-components';
import { chats, messages, fewMessages } from './data';
import Sidebar from '../src/sidebar';
import ConversationContainer from '../src/conversation-container';
import MessageHeader from '../src/message-header';
import MessageInput from '../src/message-input';
import MessageList from '../src/message-list';




const meta: Meta = {
    title: 'MainContainer',
    component: MainContainer,
    argTypes: {
        selectedConversation: {
            onSendMessage: {
                action: "sendMessage"
            }
        },
        inbox: {
            onConversationClick: {
                action: "select COnversation"
            }
        }
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta



const Template: Story<Props> = args => {

    // return <div style={{ height: '100vh' }}> <MainContainer
    //     {...args}
    //     inbox={{
    //         onScrollToBottom: () => { },
    //         themeColor: "#6ea9d7",
    //         conversations: chats,
    //         loading: false,
    //         onConversationClick: () => console.log("onChat click"),
    //         selectedConversationId: "1",
    //         currentUserId: "me"
    //     }}
    //     selectedConversation={
    //         {
    //             themeColor: "#6ea9d7",
    //             messages,
    //             header: "Sandra Bullock",
    //             currentUserId: "danny_1",
    //             onSendMessage: () => console.log("onSendMessage"),
    //             onBack: () => { }

    //         }
    //     }
    // />
    // </div>

    return <MainContainer style={{ height: '100vh' }}>
        <Sidebar>
            <ConversationContainer
                conversations={chats}
            />
        </Sidebar>

        <div style={{ position: "relative", width: "100%" }}>
            <MessageHeader> Welcome</MessageHeader>
            <MessageList
                currentUserId="danny_1"
                messages={messages}
            />
            <MessageInput />
        </div>
    </MainContainer>
}

// const MobileTemplate: Story<Props> = args => {
//     return <div style={{ width: "100%", height: "100%", backgroundColor: 'blue' }}>
//         <div style={{ width: '300px', padding: "30px", backgroundColor: 'red' }}>
//             <MainContainer

//                 mobileView
//                 {...args}
//                 inbox={{
//                     onScrollToBottom: () => { },
//                     themeColor: "#6ea9d7",
//                     conversations: chats,
//                     loading: false,
//                     onConversationClick: () => console.log("onChat click"),
//                     selectedConversationId: "1"
//                 }}
//                 selectedConversation={
//                     {

//                         themeColor: "#6ea9d7",
//                         messages,
//                         header: "Sandra Bullock",
//                         currentUserId: "danny_1",
//                         onSendMessage: () => console.log("onSendMessage"),
//                         onBack: () => { }

//                     }
//                 }
//             />
//         </div>

//     </div>
// }


// const LoadingTemplate: Story<Props> = args => {
//     return <div style={{ height: "100vh" }}> <MainContainer
//         {...args}
//         inbox={{
//             themeColor: "#6ea9d7",
//             conversations: chats,
//             loading: true,
//             onConversationClick: () => console.log("onChat click"),
//             selectedConversationId: "1"
//         }}
//         selectedConversation={
//             {

//                 themeColor: "#6ea9d7",
//                 messages,
//                 header: "Sandra Bullock",
//                 currentUserId: "danny_1",
//                 onSendMessage: () => console.log("onSendMessage"),
//                 onBack: () => { }

//             }
//         }
//     />
//     </div>
// }


// const NoSelectedChatTemplate: Story<Props> = args => <MainContainer

//     {...args}
//     inbox={{

//         themeColor: "#6ea9d7",
//         conversations: chats,
//         loading: false,
//     }}
//     selectedConversation={undefined}
// />;

// const MobileNoSelectedChatTemplate: Story<Props> = args =>
//     <div style={{ width: '300px', padding: "30px", backgroundColor: 'red' }}>
//         <MainContainer

//             {...args}
//             inbox={{

//                 themeColor: "#6ea9d7",
//                 conversations: chats,
//                 loading: false,
//             }}
//             selectedConversation={undefined}
//             mobileView={true}
//         /></div>

// const NoChatsTemplate: Story<Props> = args => <MainContainer

//     {...args}
//     inbox={{
//         themeColor: "#6ea9d7",
//         conversations: [],
//         loading: false,
//     }}
//     selectedConversation={undefined}
// />;

// const WithPaddingContainer = styled.div`
//     height: 500px; 
//     padding: 20px;
//     border: red 1px solid;
//     position: relative;
//     width: 800px;
// `
// const TemplateWithPadding: Story<Props> = args => <div
//     {...args}
//     style={{ height: "100vh" }}
// > <WithPaddingContainer>
//         <MainContainer

//             inbox={{

//                 themeColor: "#6ea9d7",
//                 conversations: chats,
//                 loading: false,
//             }}
//             selectedConversation={{
//                 themeColor: "#6ea9d7",
//                 messages: messages,
//                 header: "Sandra Bullock",
//                 currentUserId: "danny_1",
//                 onSendMessage: () => console.log("onSendMessage"),
//                 onBack: () => { }

//             }}
//         />
//     </WithPaddingContainer >
// </div>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
// export const Mobile = MobileTemplate.bind({});
// export const MobileNoSelectedConversation = MobileNoSelectedChatTemplate.bind({});
// export const NoSelectedConversation = NoSelectedChatTemplate.bind({});
// export const NoConversation = NoChatsTemplate.bind({});
// export const WithPadding = TemplateWithPadding.bind({});
// export const LoadingConversation = LoadingTemplate.bind({});



Default.args = {};
