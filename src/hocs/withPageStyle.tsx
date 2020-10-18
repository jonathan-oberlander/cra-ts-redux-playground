import React from 'react';

function getDisplayName<T extends {}>(WrappedComponent: React.FC<T>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

type HOC = {};
export const withPageStyle = <T extends {}>(Component: React.FC<T>) => {
  const MyComp = ({ ...props }: T & HOC) => {
    return (
      <div className="App">
        <Component {...(props as T & HOC)} />
      </div>
    );
  };
  Component.displayName = `${getDisplayName(Component)}`;
  MyComp.displayName = 'withPageStyle';
  return MyComp;
};
