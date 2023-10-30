import {FunctionComponent} from 'react';

interface SectionProps  {
  title: string;
}

export const Section: FunctionComponent<SectionProps> = (props) => {
  return (
    <div>
      <p>{props.title}</p>

    </div>
  );
};
// import {FunctionComponent, PropsWithChildren} from 'react';

// interface SectionProps extends PropsWithChildren {
//   title: string;
// }

// export const Section: FunctionComponent<SectionProps> = (props) => {
//   return (
//     <div>
//       <p>{props.title}</p>
//       {props.children}
//     </div>
//   );
// };
