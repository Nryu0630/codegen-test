import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
import HelloWorld from '@/src/components/hello-world';
import TestComponent from '@/src/components/test-component';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {},
  importPath: '@/src/components/hello-world'
})

registerComponent(TestComponent, {
  name: 'TestComponent',
  props: {},
  importPath: '@/src/components/test-component'
})

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
