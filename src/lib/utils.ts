export function getDisplayName<T extends {}>(WrappedComponent: React.FC<T>) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || 'Wrapped Component'
  );
}
