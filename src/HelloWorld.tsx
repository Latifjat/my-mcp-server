import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [0, 150], [0.8, 1.2]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0b84f3',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          color: 'white',
          fontFamily: 'sans-serif',
          fontSize: 160,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        Hello World
      </h1>
    </AbsoluteFill>
  );
};
